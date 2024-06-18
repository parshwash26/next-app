import dbConnect from "../../utils/dbConnect";
import CustomerSupportView from "../../models/CustomerSupportView";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { authorization } = req.headers;
  const { userUid } = req.query;
  console.log({ userUid });
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authorization.split(" ")[1];
  try {
    jwt.verify(token, JWT_SECRET);
    await dbConnect();
    const customerData = await CustomerSupportView.find({
      UserUID: userUid,
    });
    res.status(200).json(customerData);
  } catch (error) {
    console.error("Error fetching customer data:", error);
    res.status(500).json({ error: "Server error" });
  }
}
