import React from 'react'
import '../assets/style/home.css';
import Image from 'next/image';
import * as Images from '../utilities/constants';
import { useTranslations } from 'next-intl';
import Contact from './Contact';

function HomeSection() {
   const t = useTranslations("Home");
  return (
    <>
      <section id="home">
        <div className="pb-20 pt-16 flex items-center gap-10 max-md:flex-col max-md:text-center">
          {/* Avatar Section */}
          <div className="relative rounded-full overflow-hidden">
            {/* Gradient Background Wrapper */}
            <div className="avatar-gradient-wrapper">
              {/* Avatar Image */}
              <div className="avatar-wrapper">
                <Image
                  src={Images.Picoftheyear}
                  alt="Picture of the author"
                  className='avatar-img'
                />
              </div>
            </div>
          </div>
          {/* Text Section */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-light-gray font-bold text-[28px] tracking-[0.03em] relative text-left max-md:text-center">
              <span className="text-white">
                {t("name")}
                <br />
                Stack Developer.
              </span>
              {/* Open to work badge */}
              <div className="open-to-work-badge cursor-pointer absolute max-md:relative right-0 bottom-5 whitespace-nowrap text-green-600 hover:bg-green-500/20 text-sm px-3 py-1 rounded-full inline-block hover:text-green-500">
                <span className="p-1 mb-px mr-1.5 inline-block bg-green-600 rounded-full" />
                {t("opentowrok")}
              </div>
            </h1>
            {/* Location and Social Links */}
            <div className="w-full flex items-center max-md:items-center justify-between max-md:flex-col max-md:gap-3">
              {/* Location Info */}
              <a
                target="_blank"
                className="text-light-gray whitespace-nowrap hover:text-white"
                href="https://www.google.com/maps/place/Belgrade"
              >
                🏠 Frankfurt am Main, Germany.
              </a>
              {/* Social Links */}
              <div className="w-full flex items-center max-md:items-center justify-center gap-5 text-base text-light-gray">
                <a
                  target="_blank"
                  className="ml-2 max-md:ml-0 flex gap-1 items-center hover:text-white"
                  href="https://www.linkedin.com/in/vaishakhi-patel-148086141/"
                >
                  <Image
                    alt="icon"
                    loading="lazy"
                    width={24}
                    height={24}
                    src={Images.linkedinImg.src}
                  />
                  LinkedIn
                </a>
                <a
                  target="_blank"
                  className="flex gap-1 items-center hover:text-white"
                  href="https://github.com/vaishakhipatel14"
                >
                  
                  <Image
                    alt="icon"
                    loading="lazy"
                    width={20}
                    height={20}
                    src={Images.githubImg.src}
                  />
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="sticky-social">
          <ul className="social">
            <Contact/>
          </ul>
        </div>
      </section>


     

    </>
  )
}

export default HomeSection