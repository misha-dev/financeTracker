import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { useAuthContext } from "./hooks/useAuthContext";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";
import { Unknown } from "./pages/Unknown";

function App() {
  const { logged, user } = useAuthContext();
  return (
    <div className="App">
      {logged && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="signup"
              element={user ? <Navigate to={"/"} replace /> : <SignUp />}
            />
            <Route
              path="login"
              element={user ? <Navigate to={"/"} replace /> : <Login />}
            />
            <Route path="*" element={<Unknown />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
