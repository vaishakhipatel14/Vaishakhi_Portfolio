import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

function Work() {
    const t = useTranslations("Work");
  return (
      <section id="work" className="w-full">
          <div className="max-w-3xl mx-auto mt-6">
              <h1 className="mt-3 mb-10" style={{ marginBottom: 40 }}>
                  {t("title")}
              </h1>
              <div className="relative w-full">
                  <div className="absolute -left-10 top-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faBuilding} width={12} />
                  </div>
                  {/* Job Title and Date in One Row */}
                  <div className="flex w-full items-center gap-x-18">
                      <h3 className="text-lg font-semibold flex-grow text-left">
                          {t("c1")}
                          <span className="text-gradiant"> ManekTech</span>
                      </h3>
                      <p className="text-gray-400 text-sm min-w-[200px] text-right ml-auto">
                          Aug 2020 - Sep 2022
                      </p>
                  </div>
                  {/* Tech Stack */}
                  <div className="mt-2 flex gap-3 text-left p-3">
                      <span className="bg-gray-700 p-2 rounded-md text-sm">React.Js</span>
                      <span className="bg-gray-700 p-2 rounded-md text-sm">Next.js</span>
                      <span className="bg-gray-700 p-2 rounded-md text-sm">Nuxt.js</span>
                      <span className="bg-gray-700 p-2 rounded-md text-sm">NodeJs</span>
                      <span className="bg-gray-700 p-2 rounded-md text-sm">ViteJs</span>
                  </div>
              </div>
              <div className="relative w-full" style={{ marginTop: 40 }}>
                  <div className="absolute -left-10 top-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faBuilding} width={12} />
                  </div>
                  {/* Job Title and Date in One Row */}
                  <div className="flex w-full items-center gap-x-18">
                      <h3 className="text-lg font-semibold flex-grow text-left">
                          Software Developer at
                          <span className="text-gradiant"> It aims</span>
                      </h3>
                      <p className="text-gray-400 text-sm min-w-[200px] text-right ml-auto">
                          Aug 2020 - Sep 2022
                      </p>
                  </div>
                  {/* Tech Stack */}
                  <div className="mt-2 flex gap-3 text-left p-3">
                      <span className="bg-gray-700 p-2 rounded-md text-sm">React.Js</span>
                      <span className="bg-gray-700 p-2 rounded-md text-sm">Next.js</span>
                      <span className="bg-gray-700 p-2 rounded-md text-sm">Nodejs</span>
                      <span className="bg-gray-700 p-2 rounded-md text-sm">Jitsi</span>
                  </div>
              </div>
          </div>
      </section>

  )
}

export default Work