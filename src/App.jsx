import React from "react";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import { Router,Routes, Route,useLocation } from "react-router-dom";
import "./App.css";
import OTPPage from "./Pages/OTP";
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login" ||location.pathname === "/VerifyOTP" ;
  return (
    <div className={`App ${isLoginPage ? 'login-background' : 'default-background'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/VerifyOTP" element={<OTPPage />} />
        </Routes>
    
    </div>
  );
}

export default App;
