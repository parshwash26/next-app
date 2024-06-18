import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

export default function CustomerDataPage() {
  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      const token = localStorage.getItem("token");
      const userUid = localStorage.getItem("userUid");
      if (!token || !userUid) {
        setError("No token or userUid found, please login first");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("/api/customer-data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            userUid: userUid,
          },
        });
        setCustomerData(res.data);
      } catch (error) {
        setError("Error fetching customer data");
      }
      setLoading(false);
    };

    fetchCustomerData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User Email</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Wallet Address</TableCell>
            <TableCell>Transaction Hash</TableCell>
            <TableCell>Transaction Value</TableCell>
            <TableCell>Transaction Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customerData.map((data) => (
            <TableRow key={data._id.$oid}>
              <TableCell>{data.UserEmail}</TableCell>
              <TableCell>{data.UserName}</TableCell>
              <TableCell>{data.WalletAddress}</TableCell>
              <TableCell>{data.TransactionHash}</TableCell>
              <TableCell>{data.TransactionValue}</TableCell>
              <TableCell>{data.TransactionStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
