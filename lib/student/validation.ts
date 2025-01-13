import { z } from "zod";

export const studentRegisterSchema = z.object({
  studentId: z.string().regex(/^\d+$/, "Must be a number").max(8),
  program: z.enum(["BCSE", "BSEEE", "BBA"], {
    required_error: "You need to select program",
  }),
  fullName: z.string().min(1, "Required").max(100),
  gender: z.enum(["male", "female"], {
    required_error: "You need to select gender.",
  }),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^\d+$/, "Must be a number").max(11),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(4, "Password must have 4 characters.")
    .max(8, "Maximum length 8."),
});

export type TStudentRegisterSchema = z.infer<typeof studentRegisterSchema>;
