import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";
import { Unknown } from "./pages/Unknown";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Unknown />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
