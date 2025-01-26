import React from "react";
import "../styles/LoginPage.css";
import LoginCard from "../components/LoginCard/LoginCard";
import Navbar from "../components/Navbar/Navbar";

const LoginPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="login-page">
        <LoginCard />
      </div>
    </>
  );
};

export default LoginPage;
