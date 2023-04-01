import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header.jsx";
import Services from "../components/Sections/Services.jsx";
import Contact from "../components/Sections/Contact.jsx";
import Footer from "../components/Sections/Footer.jsx"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
    <Contact />
      <Footer /> 
    </>
  );
}


