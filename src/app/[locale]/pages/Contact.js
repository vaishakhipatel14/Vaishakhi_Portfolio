import React from 'react'
import * as Images from '../utilities/constants';
// import { useTranslations } from 'next-intl';

function Contact() {
    // const t = useTranslations("contact");

    const ContactItems = [
        {
            id: 1,
            name: 'Gmail',
            src: 'mailto:patelvaishakhi440qgmail.com',
            img: Images.gmailImg
        },
        {
            id: 2,
            name: 'Linkedin',
            src: 'https://www.linkedin.com/in/vaishakhi-patel-148086141',
            img: Images.linkedinImg
        },
        {
            id: 3,
            name: 'Github',
            src: 'https://github.com/vaishakhipatel14',
            img: Images.githubImg
        },
        {
            id: 4,
            name: 'Xing',
            src: 'https://www.xing.com/profile/Vaishakhi_Patel',
            img: Images.xingImg
        },
    ]

    return (
    <>
       {/* <section id="contact"> */}
            {/* <div className="p-3 flex-col gap-10 text-center max-md:text-left max-md:flex-col leading-7 space-y-6"> */}
                {/* <h1 className="mt-3 mb-10" style={{ marginBottom: 40 }}>
                    {t("title")}
                </h1> */}
                {
                    ContactItems.map((items) => {
                        return (

                            <button key={items.id}>
                                <a target="_blank" href={items.src}>
                                    <img
                                        className='contact-icon'
                                        src={items.img.src}
                                        alt={items.name}
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </button>

                        )
                    })
                }
            {/* </div> */}
        {/* </section> */}
</>
    )
}

export default Contact
