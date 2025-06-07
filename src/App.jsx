import React, { useState } from "react";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import "./index.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        {isLogin ? <Login /> : <Register />}
        <button
          className="toggle-button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </div>
    </div>
  );
}

export default App;