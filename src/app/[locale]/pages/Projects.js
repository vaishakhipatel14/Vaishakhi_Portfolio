import React from 'react'
import '../assets/style/project.css';
import Card from '../components/commom/Card';
import * as Images from '../utilities/constants';
import { useTranslations } from 'next-intl';

function Projects() {
    const t = useTranslations("project");
    const projectData = [
        {
            id: 1,
            title: t("p1.title"),
            image: Images.weslide,
            description: t("p1.description"),
            skills: [
                { name: 'React', icon: Images.reactimg },
                { name: 'TypeScript', icon: Images.typescriptimg },
                { name: 'Tailwind', icon: Images.tailwindimg },
                { name: 'Socket.IO', icon: Images.socketimg },
                { name: 'Node.js', icon: Images.nodeimg },
                { name: 'MongoDb', icon: Images.mongodbimg },
                { name: 'Redux', icon: Images.reduximg },
                { name: 'Jest', icon: Images.jestimg },
            ]
        },
        {
            id: 2,
            title: t("p2.title"),
            image: Images.digiconn,
            description: t("p2.description"),
            skills: [
                { name: 'React', icon: Images.reactimg },
                { name: 'Javascript', icon: Images.javascriptimg },
                { name: 'AntDesign', icon: Images.antimg },
                { name: 'Socket.IO', icon: Images.socketimg },
                { name: 'Node.js', icon: Images.nodeimg },
                { name: 'GraphQl', icon: Images.graphqlimg },
                { name: 'Redux', icon: Images.reduximg },
                { name: 'Jest', icon: Images.jestimg },
            ]
        },
        {
            id: 3,
            title: t("p3.title"),
            image: Images.digitaldavos,
            description: t("p3.description"),
            skills: [
                { name: 'NextJs', icon: Images.nextimg },
                { name: 'TypeScript', icon: Images.typescriptimg },
                { name: 'Tailwind', icon: Images.tailwindimg },
                { name: 'Socket.IO', icon: Images.socketimg },
                { name: 'Node.js', icon: Images.nodeimg },
                { name: 'PostgreSQL', icon: Images.postgresqlimg },
                { name: 'Redux', icon: Images.reduximg },
                { name: 'Docker', icon: Images.dockerimg },
            ]
        },
        {
            id: 4,
            title: t("p4.title"),
            image: Images.handmerge,
            description: t("p4.description"),
            skills: [
                { name: 'NextJs', icon: Images.nextimg },
                { name: 'TypeScript', icon: Images.typescriptimg },
                { name: 'Tailwind', icon: Images.tailwindimg },
                { name: 'Socket.IO', icon: Images.socketimg },
                { name: 'NestJs', icon: Images.nestimg },
                { name: 'GraphQl', icon: Images.graphqlimg },
                { name: 'Redux', icon: Images.reduximg },
                { name: 'Jest', icon: Images.jestimg },
            ]
        }
    ];

    return (
        <section id="project">
            <div className="p-3 flex-wrap gap-10 text-center max-md:text-left max-md:flex-col leading-7 space-y-6">
                <h1 className="mt-3 mb-10" style={{ marginBottom: 40 }}>
                    {t("title")}
                </h1>
                <div className="flex flex-row gap-3 flex-wrap">
                    {projectData.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Projects
