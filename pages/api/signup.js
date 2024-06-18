import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, password, role } = req.body;

  try {
    await dbConnect();

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user instance
    const newUser = new User({
      name,
      email,
      role,
      passwordDigest: hashedPassword, // Store hashed password
    });

    // Save user to database
    await newUser.save();

    // Respond with success message or user data
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
}
