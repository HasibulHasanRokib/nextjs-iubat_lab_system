import { db } from "../db";

export const getStudentById = async (id: string) => {
  try {
    const student = await db.student.findUnique({
      where: { studentId: id },
    });
    return student;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getStudentByEmail = async (email: string) => {
  try {
    const student = await db.student.findUnique({
      where: { email },
    });
    return student;
  } catch (error) {
    console.log(error);
    return null;
  }
};
