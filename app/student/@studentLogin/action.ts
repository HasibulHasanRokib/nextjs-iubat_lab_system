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
      await db.student.update({
        where: {
          studentId: studentExist.studentId,
        },
        data: {
          isLoggedIn: false,
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
          loginTime: new Date(),
        },
      });
      return { success: "Login successful." };
    }
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
}
