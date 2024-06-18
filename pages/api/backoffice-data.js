// handler.js
import dbConnect from "../../utils/dbConnect";
import BackOfficeReportingView from "../../models/backoffice";
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
    let backOfficeData = await BackOfficeReportingView.find();
    backOfficeData = {
      _id: {
        $oid: "66712ab197423dad3fe06d3b",
      },
      WalletUID: "1a2b3c4d5e6f7g8h9i",
      WalletUserUID: "user123",
      WalletAddress: "0x1234567890abcdef1234567890abcdef12345678",
      WalletType: "Ethereum",
      WalletCryptoSchema: "HD Wallet",
      WalletCreatedAt: 1697358600000,
      WalletUpdatedAt: 1716209100000,
      UserUID: "08c52ee2-0d9d-4ce6-8538-9eccf1b9676f",
      UserEmail: "parshwa@gmail.com",
      UserName: "spidy",
      UserCreatedAt: 1690884000000,
      UserUpdatedAt: 1718010900000,
      TransactionHash: "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz",
      TransactionUserUID: "user123",
      TransactionWalletUID: "1a2b3c4d5e6f7g8h9i",
      TransactionTo: "0x9876543210fedcba9876543210fedcba98765432",
      TransactionFrom: "0xfedcba09876543210fedcba09876543210fedcba",
      TransactionValue: "1.2345 ETH",
      TransactionStatus: "Completed",
      TransactionDirection: "Outgoing",
      TransactionCreatedAt: 1716647400000,
      TransactionUpdatedAt: 1716647700000,
      StreamUID: "stream123",
      StreamMoralisID: "moralis456",
      StreamDescription: "Notification Stream",
      StreamTag: "Notification",
      StreamChains: ["0x1", "0xa", "0x89"],
      StreamCreatedAt: 1711962000000,
      StreamUpdatedAt: 1717240800000,
      RecoveryKeyUserUID: "user123",
      RecoveryKeyCredentialID:
        "Q0UxRkM0MUMtNkE5Qy00MkY4LTkzNUYtMEI1OUZBMjJEMzg1",
      RecoveryKeyCreatedAt: 1710489600000,
      RecoveryKeyUpdatedAt: 1710489600000,
      QueueJobTxHash: "0xdef456ghi789jkl012mno345pqr678stu901vwx234yzabc123",
      QueueJobUserUID: "user123",
      QueueJobCreatedAt: 1717603200000,
      QueueJobUpdatedAt: 1717604100000,
      PendingTransactionHash:
        "0x789jkl012mno345pqr678stu901vwx234yzabc123def456ghi",
      PendingTransactionUserUID: "user123",
      PendingTransactionCreatedAt: 1718015400000,
      PendingTransactionUpdatedAt: 1718015700000,
      NameAddressUID: "name123",
      NameAddressUserUID: "user123",
      NameAddressName: "example.openwallet.eth",
      NameAddressAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      NameAddressCreatedAt: 1715770800000,
      NameAddressUpdatedAt: 1715770800000,
      MigrationName: "1708425500724_screensDefault.cjs",
      MigrationCreatedAt: 1701441000000,
      MigrationUpdatedAt: 1701441000000,
    };
    console.log({ backOfficeData });
    res.status(200).json(backOfficeData);
  } catch (error) {
    console.error("Error fetching back office data:", error);
    res.status(500).json({ error: "Server error" });
  }
}
