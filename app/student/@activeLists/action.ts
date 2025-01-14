"use server";

import { db } from "@/lib/db";

export async function activeStudentList() {
  try {
    const students = await db.student.findMany({
      where: {
        isLoggedIn: true,
      },
      orderBy: {
        loginTime: "desc",
      },
    });
    return students;
  } catch (error) {
    console.log(error);
  }
}
