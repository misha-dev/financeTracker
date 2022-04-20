import React, { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";
import cl from "./SignUp.module.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp, isPending, error } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password, name);
  };

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
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter the name"
          />
        </label>
        {isPending ? (
          <button className="btn" disabled>
            Loading
          </button>
        ) : (
          <button className="btn" onClick={handleSubmit}>
            Sign up
          </button>
        )}
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};
