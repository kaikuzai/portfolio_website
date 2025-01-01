import React from "react";
import "../styles/RegisterPage.css";
import RegisterCard from "../components/RegisterCard/RegisterCard";
import Navbar from "../components/Navbar/Navbar";

const RegisterPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="register-page">
        <RegisterCard />
      </div>
    </>
  );
};

export default RegisterPage;
