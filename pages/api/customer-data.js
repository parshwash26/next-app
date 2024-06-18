// handler.js
import dbConnect from "../../utils/dbConnect";
import customersupport from "../../models/customersupport";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { authorization } = req.headers;
  const { userUid } = req.query;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authorization.split(" ")[1];
  try {
    jwt.verify(token, JWT_SECRET);
    console.log("1");
    const db = await dbConnect(); // Connect to the database
    console.log("2");
    let customerData = await customersupport.find();
    console.log({ customerData });
    customerData = {
      _id: {
        $oid: "6671493213c8cd3647ba3f02",
      },
      UserUID: "08c52ee2-0d9d-4ce6-8538-9eccf1b9676f",
      UserEmail: "parshwa@gmail.com",
      UserName: "spidy",
      WalletUID: "1a2b3c4d5e6f7g8h9i",
      WalletAddress: "0x1234567890abcdef1234567890abcdef12345678",
      WalletType: "Ethereum",
      TransactionHash: "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz",
      TransactionTo: "0x9876543210fedcba9876543210fedcba98765432",
      TransactionFrom: "0xfedcba09876543210fedcba09876543210fedcba",
      TransactionValue: "1.2345 ETH",
      TransactionStatus: "Completed",
      TransactionDirection: "Outgoing",
      StreamUID: "stream123",
      StreamDescription: "Notification Stream",
      RecoveryKeyCredentialID:
        "Q0UxRkM0MUMtNkE5Qy00MkY4LTkzNUYtMEI1OUZBMjJEMzg1",
      QueueJobTxHash: "0xdef456ghi789jkl012mno345pqr678stu901vwx234",
      PendingTransactionHash: "0x789jkl012mno345pqr678stu901vwx234yzabc123",
      NameAddressName: "example.openwallet.eth",
      NameAddressAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    };
    res.status(200).json(customerData);
  } catch (error) {
    console.error("Error fetching customer data:", error);
    res.status(500).json({ error: "Server error" });
  }
}
