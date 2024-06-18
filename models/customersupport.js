import mongoose from "mongoose";

const { Schema } = mongoose;

const customersupportSchema = new Schema({
  UserUID: {
    type: String,
    required: true,
  },
  UserEmail: {
    type: String,
    required: true,
  },
  UserName: {
    type: String,
    required: true,
  },
  WalletUID: {
    type: String,
    required: true,
  },
  WalletAddress: {
    type: String,
    required: true,
  },
  WalletType: {
    type: String,
    required: true,
  },
  TransactionHash: {
    type: String,
    required: true,
  },
  TransactionTo: {
    type: String,
    required: true,
  },
  TransactionFrom: {
    type: String,
    required: true,
  },
  TransactionValue: {
    type: String,
    required: true,
  },
  TransactionStatus: {
    type: String,
    required: true,
  },
  TransactionDirection: {
    type: String,
    required: true,
  },
  StreamUID: {
    type: String,
    required: true,
  },
  StreamDescription: {
    type: String,
    required: true,
  },
  RecoveryKeyCredentialID: {
    type: String,
    required: true,
  },
  QueueJobTxHash: {
    type: String,
    required: true,
  },
  PendingTransactionHash: {
    type: String,
    required: true,
  },
});

const customersupport = mongoose.model(
  "customersupports",
  customersupportSchema
);

export default customersupport;
