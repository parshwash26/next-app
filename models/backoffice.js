import mongoose from "mongoose";

const { Schema } = mongoose;

const backOfficeReportingViewSchema = new Schema({
  WalletUID: String,
  WalletUserUID: String,
  WalletAddress: String,
  WalletType: String,
  WalletCryptoSchema: String,
  WalletCreatedAt: Date,
  WalletUpdatedAt: Date,
  UserUID: String,
  UserEmail: String,
  UserName: String,
  UserCreatedAt: Date,
  UserUpdatedAt: Date,
  TransactionHash: String,
  TransactionUserUID: String,
  TransactionWalletUID: String,
  TransactionTo: String,
  TransactionFrom: String,
  TransactionValue: String,
  TransactionStatus: String,
  TransactionDirection: String,
  TransactionCreatedAt: Date,
  TransactionUpdatedAt: Date,
  StreamUID: String,
  StreamMoralisID: String,
  StreamDescription: String,
  StreamTag: String,
  StreamChains: [String],
  StreamCreatedAt: Date,
  StreamUpdatedAt: Date,
  RecoveryKeyUserUID: String,
  RecoveryKeyCredentialID: String,
  RecoveryKeyCreatedAt: Date,
  RecoveryKeyUpdatedAt: Date,
  QueueJobTxHash: String,
  QueueJobUserUID: String,
  QueueJobCreatedAt: Date,
  QueueJobUpdatedAt: Date,
  PendingTransactionHash: String,
  PendingTransactionUserUID: String,
  PendingTransactionCreatedAt: Date,
  PendingTransactionUpdatedAt: Date,
  NameAddressUID: String,
  NameAddressUserUID: String,
  NameAddressName: String,
  NameAddressAddress: String,
  NameAddressCreatedAt: Date,
  NameAddressUpdatedAt: Date,
  MigrationName: String,
  MigrationCreatedAt: Date,
  MigrationUpdatedAt: Date,
});

// Exporting the model
const BackOfficeReportingView = mongoose.model(
  "BackOfficeReportingView",
  backOfficeReportingViewSchema
);

export default BackOfficeReportingView;