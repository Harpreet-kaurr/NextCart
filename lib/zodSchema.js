import { z } from "zod";
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{8,}$/;
export const zSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(128, { message: "Password is too long (max 128 characters)" })
    .regex(passwordRegex, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
});