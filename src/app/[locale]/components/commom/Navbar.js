import React from 'react'
import '../../assets/style/navbar.css';
import LocaleSwitcher from '../LocaleSwitcher'; // Adjust the path as needed
import { useTranslations } from "next-intl";
import Download from '../commom/Download';

function Navbar() {
   const t = useTranslations("Navbar");
  return (
    <>
    <nav className="navbar">
    <div className="logo">Vaishakhi Patel</div>
    <div className="nav-container">
      <ul className="nav-links">
        <li><a href="#home">{t("home")}</a></li>
            <li><a href="#about">{t("about")}</a></li>
            <li><a href="#project">{t("project") }</a></li>
            <li><a href="#skill">{t("skill")}</a></li>
            <li><Download /></li>
            <li><LocaleSwitcher /></li>
            
            
      </ul>
    </div>
  </nav>

    <div className="nav-dots">
      <a href="#home" className="dot active"></a>
      <a href="#about" className="dot"></a>
      <a href="#project" className="dot"></a>
      <a href="#skill" className="dot"></a>
    </div>
    </>
  )
}

export default Navbar