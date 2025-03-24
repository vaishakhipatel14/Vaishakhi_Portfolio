import React from "react";
import HomeSection from "./pages/HomeSection";
import Navbar from "./components/commom/Navbar";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Skills from "./pages/Skill";
// import Contact from "./pages/Contact";


export default function Home() {
  return (
    <div className="h-full w-full mx-auto max-w-[65rem] p-6">
      {/* <div> */}
      <Navbar />
      <HomeSection />
      <About />
      <Work />
      <Projects />
      <Skills />
      {/* <Contact /> */}
    </div>
  );
}

// import { Link } from "@/i18n/routing";
// import { getTranslations } from "next-intl/server";

// export default async function HomePage() {
//   const t = await getTranslations("HomePage");
//   return (
//     <div>
//       <h1>{t("title")}</h1>
//       <Link href="/contact">{t("contact")}</Link>
//     </div>
//   );
// }
