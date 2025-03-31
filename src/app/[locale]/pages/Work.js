import React from 'react'
import { useTranslations } from 'next-intl';

function Work() {
    const t = useTranslations("Work");
    return (
        <section id="work" className="w-full">
            <div className="max-w-3xl mx-auto mt-6">
                <h1 className="mt-3 mb-10 max-md:text-left" style={{ marginBottom: 40 }}>
                    {t("title")}
                </h1>

                <div className="flex flex-col w-full gap-16 mb-5">
                    <div className="flex w-full gap-10">
                        <p className="text-light-gray whitespace-nowrap max-sm:hidden">2023 - 2025</p>
                        <div className="flex flex-col text-start">
                            <p className="text-white text-lg font-semibold"> {t("c1")}</p>
                            <p className="text-light-gray mb-4">
                                <a href="https://www.itaims.com/" target="_blank" rel="noopener noreferrer" className="text-light-gray cursor-pointer">
                                    Itaims
                                </a>
                                <span className="text-light-gray whitespace-nowrap hidden max-sm:inline-block ml-2">• (2020 - 2022)</span>
                            </p>
                            <p className="text-light-gray">{t("itaims")}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-14">
                    <div className="flex w-full gap-10">
                        <p className="text-light-gray whitespace-nowrap max-sm:hidden">2022 - 2024</p>
                        <div className="flex flex-col text-start">
                            <p className="text-white text-lg font-semibold"> {t("c1")}</p>
                            <p className="text-light-gray mb-4">
                                <a href="https://www.manektech.com/" target="_blank" rel="noopener noreferrer" className="text-light-gray cursor-pointer">
                                ManekTech
                            </a>
                            </p>

                            <p className="text-light-gray">{t("Manektech")}</p>
                        </div>
                    </div>
                </div>

                {/* <div className="relative w-full">
                    <div className="max-md:relative absolute max-md:left-0 -left-10 top-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faBuilding} width={12} />
                    </div>
                    <div className="flex w-full items-center gap-x-18">
                        <h3 className="text-lg font-semibold flex-grow text-left">
                            {t("c1")}
                            <span className="text-gradiant"> ManekTech</span>
                        </h3>
                        <p className="text-gray-400 text-sm min-w-[200px] text-right ml-auto">
                            Aug 2020 - Sep 2022
                        </p>
                    </div>
                    <div className="mt-2 flex gap-3 text-left p-3">
                        <span className="bg-gray-700 p-2 rounded-md text-sm">React.Js</span>
                        <span className="bg-gray-700 p-2 rounded-md text-sm">Next.js</span>
                        <span className="bg-gray-700 p-2 rounded-md text-sm">Nuxt.js</span>
                        <span className="bg-gray-700 p-2 rounded-md text-sm">NodeJs</span>
                        <span className="bg-gray-700 p-2 rounded-md text-sm">ViteJs</span>
                    </div>
                </div> */}
                {/* <div className="relative w-full" style={{ marginTop: 40 }}>
                    <div className="max-md:relative absolute max-md:left-0 -left-10 top-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faBuilding} width={12} />
                    </div>
                    <div className="flex w-full items-center gap-x-18">
                        <h3 className="text-lg font-semibold flex-grow text-left">
                            Software Developer at
                            <span className="text-gradiant"> It aims</span>
                        </h3>
                        <p className="text-gray-400 text-sm min-w-[200px] text-right ml-auto">
                            Aug 2020 - Sep 2022
                        </p>
                    </div>
                    <div className="mt-2 flex gap-3 text-left p-3">
                        <span className="bg-gray-700 p-2 rounded-md text-sm">React.Js</span>
                        <span className="bg-gray-700 p-2 rounded-md text-sm">Next.js</span>
                        <span className="bg-gray-700 p-2 rounded-md text-sm">Nodejs</span>
                        <span className="bg-gray-700 p-2 rounded-md text-sm">Jitsi</span>
                    </div>
                </div> */}

            </div>
        </section>

    )
}

export default Work