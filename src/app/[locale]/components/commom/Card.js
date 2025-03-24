
import React from 'react'

function Card({ project }) {


  return (
    // <div className="cardBox w-50 h-100 rounded-2xl flex flex-col shadow-xl border-white-200">
    //   <div className="card">
    //     <div className="rounded-t-2xl">
    //       <img
    //         src={project.image.src}
    //         alt="Card Preview"
    //         className="w-90 h-40 p-4 object-cover rounded-t-2xl"
    //       />
    //     </div>
    //     <div className="flex flex-col p-4">
    //       <p className="text-sm font-bold pb-2">{project.title}</p>
    //       <p className="text-xs">
    //         {project.description}
    //       </p>
    //     </div>
    //     <div className="content group absolute inset-0 bg-black rounded-2xl bg-opacity-60 flex justify-center items-center ">
    //       <div className="grid grid-row-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
    //         {project.skills.map((skill, index) => {
    //           return (
    //             (
    //               <div key={index} className="skill-card cursor-pointer flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300 hover:scale-105 hover:rotate-2 hover:bg-blue-600/30 transition-all duration-400 ease-in-out">
    //                 <img alt={`${skill.name} Icon`} loading="lazy" width={18} height={18} decoding="async" src={skill.icon.src} />
    //                 <p className="text-xs whitespace-nowrap">{skill.name}</p>
    //               </div>
    //             )
    //           )
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="rounded-lg w-[48%] max-md:w-full border border-gray-300 p-5 flex flex-col gap-5">
      <a  >
        <img
          src={project.image.src}
          alt="Card Preview"
          loading="lazy"
          // width={600}
          // height={380}
          decoding="async"
          data-nimg={1}
          className="rounded-md object-cover border border-[#1f1f1f;]"
          style={{ color: "transparent" }}
        />
      </a>
      <div className="flex flex-col">
        <p className="font-semibold text-white text-xl tracking-widest">{project.title}</p>
        <p className="text-gray-300 mt-3 text">
          {project.description}
        </p>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
          {project.skills.map((skill, index) => {
            return (
              <div key={index}
                className="flex h-7 items-center justify-center gap-1.5 px-4 rounded-full
      bg-[#4c4c4c1a] text-blue-300"
              >
                <img
                  loading="lazy"
                  width={18}
                  height={18}
                  decoding="async"
                  data-nimg={1}
                  alt={`${skill.name} Icon`}
                  src={skill.icon.src}
                  style={{ color: "transparent" }}
                />
                <p className="text-xs whitespace-nowrap">{skill.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Card