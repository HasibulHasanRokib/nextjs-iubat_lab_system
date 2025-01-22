"use server";

import { getStudentById } from "@/lib/student/student";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import {
  studentLoginSchema,
  TStudentLoginSchema,
} from "@/lib/student/validation";

export async function studentLogin(values: TStudentLoginSchema) {
  try {
    const validation = studentLoginSchema.safeParse(values);

    if (!validation.success) {
      return { error: "Invalid input!" };
    }
    const { studentId, password } = validation.data;

    const studentExist = await getStudentById(studentId);

    if (!studentExist) return { error: "This student Id are not registered!" };

    if (studentExist.isBanned) return { error: "This student id is banned!" };

    const passOk = bcrypt.compareSync(password, studentExist.password);

    if (!passOk) return { error: "Invalid password!" };

    if (studentExist.isLoggedIn) {
      const logoutStudent = await db.student.update({
        where: {
          studentId: studentExist.studentId,
        },
        data: {
          isLoggedIn: false,
          lastLogout: new Date(),
        },
      });

      await db.attendance.updateMany({
        where: {
          studentId: logoutStudent.studentId,
        },
        data: {
          logoutTime: new Date(),
        },
      });
      return { success: "Logout successful." };
    } else {
      await db.student.update({
        where: {
          studentId: studentExist.studentId,
        },
        data: {
          isLoggedIn: true,
          lastLogin: new Date(),
        },
      });

      await db.attendance.create({
        data: {
          loginTime: new Date(),
          studentId: studentExist.studentId,
        },
      });

      return { success: "Login successful." };
    }
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
}
