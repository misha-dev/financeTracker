import React, { useState } from "react";
import cl from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className={cl.loginWrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter the email"
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter the password"
          />
        </label>
        <button className="btn">Login</button>
      </form>
    </div>
  );
};
