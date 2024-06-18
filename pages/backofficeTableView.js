import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/userDataResPage.module.css";

export default function UserDataResPage() {
  const router = useRouter();
  const { userDataRes } = router.query;
  const [parsedUserDataRes, setParsedUserDataRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userDataRes) {
      try {
        setParsedUserDataRes(JSON.parse(userDataRes));
      } catch (error) {
        setError("Error parsing customer data");
      }
    }
  }, [userDataRes]);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div className={styles.loadingMessage}>Loading...</div>;
  if (error) return <div className={styles.errorMessage}>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>WalletUID</th>
              <th>WalletUserUID</th>
              <th>WalletAddress</th>
              <th>WalletType</th>
              <th>WalletCryptoSchema</th>
              <th>WalletCreatedAt</th>
              <th>WalletUpdatedAt</th>
              <th>UserUID</th>
              <th>UserEmail</th>
              <th>UserName</th>
              <th>UserCreatedAt</th>
              <th>UserUpdatedAt</th>
              <th>TransactionHash</th>
              <th>TransactionUserUID</th>
              <th>TransactionWalletUID</th>
              <th>TransactionTo</th>
              <th>TransactionFrom</th>
              <th>TransactionValue</th>
              <th>TransactionStatus</th>
              <th>TransactionDirection</th>
              <th>TransactionCreatedAt</th>
              <th>TransactionUpdatedAt</th>
              <th>StreamUID</th>
              <th>StreamMoralisID</th>
              <th>StreamDescription</th>
              <th>StreamTag</th>
              <th>StreamChains</th>
              <th>StreamCreatedAt</th>
              <th>StreamUpdatedAt</th>
              <th>RecoveryKeyUserUID</th>
              <th>RecoveryKeyCredentialID</th>
              <th>RecoveryKeyCreatedAt</th>
              <th>RecoveryKeyUpdatedAt</th>
              <th>QueueJobTxHash</th>
              <th>QueueJobUserUID</th>
              <th>QueueJobCreatedAt</th>
              <th>QueueJobUpdatedAt</th>
              <th>PendingTransactionHash</th>
              <th>PendingTransactionUserUID</th>
              <th>PendingTransactionCreatedAt</th>
              <th>PendingTransactionUpdatedAt</th>
              <th>NameAddressUID</th>
              <th>NameAddressUserUID</th>
              <th>NameAddressName</th>
              <th>NameAddressAddress</th>
              <th>NameAddressCreatedAt</th>
              <th>NameAddressUpdatedAt</th>
              <th>MigrationName</th>
              <th>MigrationCreatedAt</th>
              <th>MigrationUpdatedAt</th>
            </tr>
          </thead>
          <tbody>
            {parsedUserDataRes && (
              <tr>
                <td>{parsedUserDataRes.WalletUID}</td>
                <td>{parsedUserDataRes.WalletUserUID}</td>
                <td>{parsedUserDataRes.WalletAddress}</td>
                <td>{parsedUserDataRes.WalletType}</td>
                <td>{parsedUserDataRes.WalletCryptoSchema}</td>
                <td>{parsedUserDataRes.WalletCreatedAt}</td>
                <td>{parsedUserDataRes.WalletUpdatedAt}</td>
                <td>{parsedUserDataRes.UserUID}</td>
                <td>{parsedUserDataRes.UserEmail}</td>
                <td>{parsedUserDataRes.UserName}</td>
                <td>{parsedUserDataRes.UserCreatedAt}</td>
                <td>{parsedUserDataRes.UserUpdatedAt}</td>
                <td>{parsedUserDataRes.TransactionHash}</td>
                <td>{parsedUserDataRes.TransactionUserUID}</td>
                <td>{parsedUserDataRes.TransactionWalletUID}</td>
                <td>{parsedUserDataRes.TransactionTo}</td>
                <td>{parsedUserDataRes.TransactionFrom}</td>
                <td>{parsedUserDataRes.TransactionValue}</td>
                <td>{parsedUserDataRes.TransactionStatus}</td>
                <td>{parsedUserDataRes.TransactionDirection}</td>
                <td>{parsedUserDataRes.TransactionCreatedAt}</td>
                <td>{parsedUserDataRes.TransactionUpdatedAt}</td>
                <td>{parsedUserDataRes.StreamUID}</td>
                <td>{parsedUserDataRes.StreamMoralisID}</td>
                <td>{parsedUserDataRes.StreamDescription}</td>
                <td>{parsedUserDataRes.StreamTag}</td>
                <td>{parsedUserDataRes.StreamChains}</td>
                <td>{parsedUserDataRes.StreamCreatedAt}</td>
                <td>{parsedUserDataRes.StreamUpdatedAt}</td>
                <td>{parsedUserDataRes.RecoveryKeyUserUID}</td>
                <td>{parsedUserDataRes.RecoveryKeyCredentialID}</td>
                <td>{parsedUserDataRes.RecoveryKeyCreatedAt}</td>
                <td>{parsedUserDataRes.RecoveryKeyUpdatedAt}</td>
                <td>{parsedUserDataRes.QueueJobTxHash}</td>
                <td>{parsedUserDataRes.QueueJobUserUID}</td>
                <td>{parsedUserDataRes.QueueJobCreatedAt}</td>
                <td>{parsedUserDataRes.QueueJobUpdatedAt}</td>
                <td>{parsedUserDataRes.PendingTransactionHash}</td>
                <td>{parsedUserDataRes.PendingTransactionUserUID}</td>
                <td>{parsedUserDataRes.PendingTransactionCreatedAt}</td>
                <td>{parsedUserDataRes.PendingTransactionUpdatedAt}</td>
                <td>{parsedUserDataRes.NameAddressUID}</td>
                <td>{parsedUserDataRes.NameAddressUserUID}</td>
                <td>{parsedUserDataRes.NameAddressName}</td>
                <td>{parsedUserDataRes.NameAddressAddress}</td>
                <td>{parsedUserDataRes.NameAddressCreatedAt}</td>
                <td>{parsedUserDataRes.NameAddressUpdatedAt}</td>
                <td>{parsedUserDataRes.MigrationName}</td>
                <td>{parsedUserDataRes.MigrationCreatedAt}</td>
                <td>{parsedUserDataRes.MigrationUpdatedAt}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
