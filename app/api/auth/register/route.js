import { connectDB } from "@/lib/db";
import { response } from "@/lib/helperFunction";
import { zSchema } from "@/lib/zodSchema";
import UserModal from "@/models/User.model";
import { SignJWT } from "jose";

export async function POST(req) {
  try {
    await connectDB();
    const validationSchema = zSchema.pick({
      name: true,
      email: true,
      password: true,
    });

    const payload = await req.json();

    const validatedData = validationSchema.safeParse(payload);

    if (!validatedData.success) {
      return response(
        false,
        401,
        "Invalid or missing input",
        validatedData.error
      );
    }

    const { name, email, password } = validatedData.data;

    const checkUser = await UserModal.exists({ email });

    //if user already exists
    if (checkUser) {
      return response(true, 409, "User already registered");
    }

    //new user registration
    const newRegistration = new UserModal({
      name,
      email,
      password,
    });

    await newRegistration.save();

    //create token
    const secret = new TextEncoder().encode(process.env.SECRET_KEY);
    const token = new SignJWT({ userId: newRegistration._id })
      .setIssuedAt()
      .setExpirationTime("1h")
      .setProtectedHeader({ alg: "HS256" })
      .sign(secret)
    
    
  } catch (error) {}
}
