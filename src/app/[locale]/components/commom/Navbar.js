import React from 'react'
import '../../assets/style/navbar.css';
import LocaleSwitcher from '../LocaleSwitcher'; // Adjust the path as needed
import { useTranslations } from "next-intl";
import Download from '../commom/Download';

function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <>
      <nav className="navbar max-w-[65rem]">
        <div className="logo">Vaishakhi Patel</div>
        <div className="nav-container max-md:hidden flex items-center">
          <ul className="nav-links flex items-center">
            <li><a href="#home">{t("home")}</a></li>
            <li><a href="#about">{t("about")}</a></li>
            <li><a href="#project">{t("project")}</a></li>
            <li><a href="#skill">{t("skill")}</a></li>
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
              <li><a href="#home">{t("home")}</a></li>
              <li><a href="#about">{t("about")}</a></li>
              <li><a href="#project">{t("project")}</a></li>
              <li><a href="#skill">{t("skill")}</a></li>
              {/* <li><Download /></li>
              <li><LocaleSwitcher /></li> */}
            </ul>
          </div>
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