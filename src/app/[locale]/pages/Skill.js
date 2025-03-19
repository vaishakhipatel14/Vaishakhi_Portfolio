import React from 'react'
import * as Images from '../../[locale]/utilities/constants';
import { useTranslations } from 'next-intl';

function Skill() {
    const t = useTranslations("skill");
    const skills = [
        { id: 1, name: 'React', icon: Images.reactimg },

        { id: 2, name: 'Next JS', icon: Images.nextimg },

        { id: 3, name: 'Redux', icon: Images.reduximg },

        { id: 4, name: 'ViteJs', icon: Images.viteimg },

        { id: 5, name: 'JavaScript', icon: Images.javascriptimg },

        { id: 6, name: 'TypeScript', icon: Images.typescriptimg },

        { id: 7, name: 'Jquery', icon: Images.jqueryimg },

        { id: 8, name: 'HTML', icon: Images.htmlimg },

        { id: 9, name: 'CSS', icon: Images.cssimg },

        { id: 10, name: 'SCSS', icon: Images.scssimg },

        { id: 11, name: 'Bootstrap', icon: Images.bootstrapimg },

        { id: 12, name: 'Tailwind', icon: Images.tailwindimg },

        { id: 13, name: 'Ant Design', icon: Images.antimg },

        { id: 14, name: 'NodeJs', icon: Images.nodeimg },

        { id: 15, name: 'ExpressJs', icon: Images.expressimg },

        { id: 16, name: 'Django', icon: Images.djangoimg },

        { id: 17, name: 'Socket.Io', icon: Images.socketimg },

        { id: 18, name: 'MongoDb', icon: Images.mongodbimg },

        { id: 19, name: 'PostgreSql', icon: Images.postgresqlimg },

        { id: 20, name: 'GraphQl', icon: Images.graphqlimg },

        { id: 21, name: 'Firebase', icon: Images.firebaseimg },

        { id: 22, name: 'Git', icon: Images.gitimg },

        { id: 23, name: 'WebPack', icon: Images.webpackimg },

        { id: 24, name: 'Babel', icon: Images.babelimg },

        { id: 25, name: 'NPM', icon: Images.npmimg },

        { id: 26, name: 'Yarn', icon: Images.yarnimg },

        { id: 27, name: 'OpenAPIs', icon: Images.openapiimg },

        { id: 28, name: 'Docker', icon: Images.dockerimg },

        { id: 29, name: 'Jira', icon: Images.jiraimg },

        { id: 30, name: 'Vercel', icon: Images.vercelimg },

        { id: 31, name: 'AWS', icon: Images.awsimg },

        { id: 32, name: 'Jest', icon: Images.jestimg },

        { id: 33, name: 'Nest', icon: Images.nestimg }
    ]

    return (
        <section id="skill">
            <div className="p-3 flex-wrap gap-10 text-center max-md:text-left max-md:flex-col leading-7 space-y-6">
                <h1 className="mt-3 mb-10" style={{ marginBottom: 40 }}>
                    {t("title")}
                </h1>
                <div className="text-white grid grid-cols-10 gap-3 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
                    {skills.map((skill) => {
                        return (
                            <div key={skill.id} className="relative group">
                                <button
                                    type="button"
                                    className="border cursor-pointer border-light-gray/50 w-14 h-14 text-light-gray rounded-lg p-3 flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:border-transparent hover:text-white"
                                >
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                    <img
                                        alt="icon-React"
                                        loading="lazy"
                                        width={32}
                                        height={32}
                                        className="transition-transform duration-300 group-hover:-translate-y-1"
                                        style={{ color: "transparent" }}
                                        src={skill.icon.src}
                                    />
                                </button>
                                <span className="tooltip-text hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 text-white bg-black text-sm rounded px-2 py-1 mt-1">
                                    {skill.name}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skill