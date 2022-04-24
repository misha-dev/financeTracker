import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import cl from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    setEmail("");
    setPassword("");
    navigate("/");
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

        {error && <p>{error}</p>}
        {isPending ? (
          <button className="btn" disabled>
            Loading
          </button>
        ) : (
          <button className="btn">Login</button>
        )}
      </form>
    </div>
  );
};
