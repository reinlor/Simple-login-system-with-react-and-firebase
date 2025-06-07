import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import db from "./firebase-config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "users", email), {
        username: username,
        email: email,
        password: password, 
      });
      alert("User registered successfully!");
    } catch (error) {
      console.error("Error registering user: ", error);
      alert("Failed to register user.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;