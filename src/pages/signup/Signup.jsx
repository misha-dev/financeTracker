import React, { useState } from "react";
import cl from "./Signup.module.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  return (
    <div className={cl.signUpWrapper}>
      <form>
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
        <label>
          <span>Name:</span>
          <input
            value={name}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="Enter the name"
          />
        </label>
        <button className="btn">Sign up</button>
      </form>
    </div>
  );
};
