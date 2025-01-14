"use server";

import { db } from "@/lib/db";
import { getStudentById } from "@/lib/student/student";
import {
  studentRegisterSchema,
  TStudentRegisterSchema,
} from "@/lib/student/validation";
import bcrypt from "bcryptjs";

export async function registration(values: TStudentRegisterSchema) {
  try {
    const validation = studentRegisterSchema.safeParse(values);

    if (!validation.success) {
      return { error: "Invalid values! Please check your inputs!" };
    }

    const {
      studentId,
      fullName,
      email,
      gender,
      program,
      phoneNumber,
      password,
    } = validation.data;

    const studentExist = await getStudentById(studentId);

    if (studentExist) {
      return { error: "This student id already registered." };
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    await db.student.create({
      data: {
        studentId,
        fullName,
        email,
        gender,
        program,
        phoneNumber,
        password: hashPassword,
      },
    });

    return { success: "Registration successful." };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong." };
  }
}
