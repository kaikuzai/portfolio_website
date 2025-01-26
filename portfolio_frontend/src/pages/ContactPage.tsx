import React from "react";
import { Contact } from "../components/ContactForm/ContactForm";
import Navbar from "../components/Navbar/Navbar";

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar page="contact" />
      <Contact />
    </>
  );
};

export default ContactPage;
