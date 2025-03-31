"use client"
import React, { useEffect, useState } from 'react'
import '../../assets/style/navbar.css';
import LocaleSwitcher from '../LocaleSwitcher'; // Adjust the path as needed
import { useTranslations } from "next-intl";
import Download from '../commom/Download';

function Navbar() {
  const t = useTranslations("Navbar");

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "home"; // Default to "about" when the page loads

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.getAttribute("id");
        }
      });

      requestAnimationFrame(() => {
        setActiveSection(currentSection);
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <nav className="navbar max-w-[65rem]">
        <div className="logo">Vaishakhi Patel</div>
        <div className="nav-container max-md:hidden flex items-center">

          <ul className="nav-links flex items-center">
            <li className={activeSection === "home" ? "active" : ""}>
              <button onClick={() => scrollToSection("home")}>{t("home")}</button>
            </li>
            <li className={activeSection === "about" ? "active" : ""}>
              <button onClick={() => scrollToSection("about")}>{t("about")}</button>
            </li>
            <li className={activeSection === "work" ? "active" : ""}>
              <button onClick={() => scrollToSection("work")}>{t("work")}</button>
            </li>
            <li className={activeSection === "project" ? "active" : ""}>
              <button onClick={() => scrollToSection("project")}>{t("project")}</button>
            </li>
            <li className={activeSection === "skill" ? "active" : ""}>
              <button onClick={() => scrollToSection("skill")}>{t("skill")}</button>
            </li>
            <li><Download /></li>
            <li><LocaleSwitcher /></li>
          </ul>
          
        </div>
        <div className="max-md:flex hidden">
          {/* <Download />
          */}
          <LocaleSwitcher />
          <button type="button" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-menu-2 "><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
          </button>
          <div className="w-full h-screen flex flex-col px-6 py-11 fixed top-0 bottom-0 left-0 right-0 bg-black hidden">
            <button type="button" className="text-white self-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x "><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
            </button>
           <ul className="flex flex-col text-light-gray text-3xl font-semibold mt-32 gap-5 text-center">
  <li><button onClick={() => scrollToSection("home")}>{t("home")}</button></li>
  <li><button onClick={() => scrollToSection("about")}>{t("about")}</button></li>
  <li><button onClick={() => scrollToSection("work")}>{t("work")}</button></li>
  <li><button onClick={() => scrollToSection("project")}>{t("project")}</button></li>
  <li><button onClick={() => scrollToSection("skill")}>{t("skill")}</button></li>
</ul>

          </div>
        </div>
      </nav>
      <div className="nav-dots">
        <button onClick={() => scrollToSection("home")} className={`dot cursor-pointer ${activeSection === "home" ? "active" : ""}`}></button>
        <button onClick={() => scrollToSection("about")} className={`dot cursor-pointer ${activeSection === "about" ? "active" : ""}`}></button>
        <button onClick={() => scrollToSection("work")} className={`dot cursor-pointer ${activeSection === "work" ? "active" : ""}`}></button>
        <button onClick={() => scrollToSection("project")} className={`dot cursor-pointer ${activeSection === "project" ? "active" : ""}`}></button>
        <button onClick={() => scrollToSection("skill")} className={`dot cursor-pointer${activeSection === "skill" ? "active" : ""}`}></button>
      </div>

    </>
  )
}

export default Navbar