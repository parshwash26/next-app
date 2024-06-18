import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/userDataResPage.module.css";

export default function userDataResPage() {
  const router = useRouter();
  const { userDataRes } = router.query;
  const [parseduserDataRes, setParseduserDataRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userDataRes) {
      try {
        setParseduserDataRes(JSON.parse(userDataRes));
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
              <th>User UID</th>
              <th>Email</th>
              <th>Name</th>
              <th>Wallet UID</th>
              <th>Wallet Address</th>
              <th>Wallet Type</th>
              <th>Transaction Hash</th>
              <th>Transaction To</th>
              <th>Transaction From</th>
              <th>Transaction Value</th>
              <th>Transaction Status</th>
              <th>Transaction Direction</th>
              <th>Stream UID</th>
              <th>Stream Description</th>
              <th>Recovery Key Credential ID</th>
              <th>Queue Job Tx Hash</th>
              <th>Pending Transaction Hash</th>
              <th>Name Address</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {parseduserDataRes && (
              <tr>
                <td>{parseduserDataRes.UserUID}</td>
                <td>{parseduserDataRes.UserEmail}</td>
                <td>{parseduserDataRes.UserName}</td>
                <td>{parseduserDataRes.WalletUID}</td>
                <td>{parseduserDataRes.WalletAddress}</td>
                <td>{parseduserDataRes.WalletType}</td>
                <td>{parseduserDataRes.TransactionHash}</td>
                <td>{parseduserDataRes.TransactionTo}</td>
                <td>{parseduserDataRes.TransactionFrom}</td>
                <td>{parseduserDataRes.TransactionValue}</td>
                <td>{parseduserDataRes.TransactionStatus}</td>
                <td>{parseduserDataRes.TransactionDirection}</td>
                <td>{parseduserDataRes.StreamUID}</td>
                <td>{parseduserDataRes.StreamDescription}</td>
                <td>{parseduserDataRes.RecoveryKeyCredentialID}</td>
                <td>{parseduserDataRes.QueueJobTxHash}</td>
                <td>{parseduserDataRes.PendingTransactionHash}</td>
                <td>{parseduserDataRes.NameAddressName}</td>
                <td>{parseduserDataRes.NameAddressAddress}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
