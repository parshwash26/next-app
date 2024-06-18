// components/SignupForm.js

import { useState } from "react";
import styles from "../styles/SignupForm.module.css";
import axios from "axios";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // Default role is customer
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/signup", {
        email,
        name,
        password,
        role,
      });
      setMessage(res.data.message);
      setEmail("");
      setName("");
      setPassword("");
      setRole("customer"); // Reset role to default after successful signup
    } catch (error) {
      setMessage(error.response.data.error);
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
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div className={styles.formGroup}>
          <label>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={styles.select}
          >
            <option value="customer">Customer</option>
            <option value="backoffice">Backoffice</option>
          </select>
        </div>
        <button type="submit" className={styles.button}>
          Signup
        </button>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </div>
  );
}
