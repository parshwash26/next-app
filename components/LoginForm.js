import { useState } from "react";
import styles from "../styles/LoginForm.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", { email, password });
      const { token, userUid } = res.data;
      localStorage.setItem("token", token); // Store token in localStorage
      localStorage.setItem("userUid", userUid); // Store userUid in localStorage
      router.push("/customer-data"); // Redirect to customer data page
    } catch (error) {
      setMessage(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </div>
  );
}
