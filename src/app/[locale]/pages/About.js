import React from 'react'
import '../assets/style/about.css';
import { useTranslations } from 'next-intl';

function About() {
  const t = useTranslations("About");
  return (
    <section id="about">
      <div className="p-3 flex-wrap gap-10 text-center max-md:text-left max-md:flex-col leading-7 space-y-6">
        <h1 className="mt-3 mb-10" >
          {t("title")}
        </h1>
        <div className="text-left mt-6 grid gap-6">
          <p className='text-gray-200'>
            {t("p1")}
          </p>
          <p className='text-gray-200'>
            {t("p2")}
          </p>
          <p className='text-gray-200'>
            {t("p3")}
          </p>
          <p className='text-gray-200'>
            {t("p4")}
          </p>
          <p className='text-gray-200'>
            {t("p5")}
          </p>
        </div>
      </div>
    </section>

  )
}

export default About