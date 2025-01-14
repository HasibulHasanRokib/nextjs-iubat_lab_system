"use server";

import { getStudentByEmail } from "@/lib/student/student";
import {
  forgotPasswordSchema,
  TForgotPasswordSchema,
} from "@/lib/student/validation";

export async function forgotPasswordAction(values: TForgotPasswordSchema) {
  try {
    const validation = forgotPasswordSchema.safeParse(values);
    if (!validation.success) {
      return { error: "Invalid input." };
    }
    const { email } = validation.data;
    const studentExist = await getStudentByEmail(email);

    if (!studentExist) {
      return { error: "This email not register." };
    }

    return { success: "Email send." };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
}
