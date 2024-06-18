// models/CustomerSupportView.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSupportViewSchema = new Schema({
  UserUID: { type: String, required: true },
  UserEmail: { type: String, required: true },
  UserName: { type: String, required: true },
  WalletUID: { type: String },
  WalletAddress: { type: String },
  WalletType: { type: String },
  TransactionHash: { type: String },
  TransactionTo: { type: String },
  TransactionFrom: { type: String },
  TransactionValue: { type: String },
  TransactionStatus: { type: String },
  TransactionDirection: { type: String },
  StreamUID: { type: String },
  StreamDescription: { type: String },
  RecoveryKeyCredentialID: { type: String },
  QueueJobTxHash: { type: String },
  PendingTransactionHash: { type: String },
  NameAddressName: { type: String },
  NameAddressAddress: { type: String },
});

const CustomerSupportView = mongoose.model(
  "CustomerSupportView",
  customerSupportViewSchema
);

module.exports = CustomerSupportView;
