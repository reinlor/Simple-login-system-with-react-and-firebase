import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebase-config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        if (userData.password === password) {
          alert("Login successful!");
        } else {
          alert("Invalid password.");
        }
      } else {
        alert("No user found with this email.");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      alert("Failed to log in.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;