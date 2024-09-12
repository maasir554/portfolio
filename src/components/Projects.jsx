
import {PROJECTS} from "../constants"
import { motion } from "framer-motion"

export const Projects = () => (
    <div className="border-b border-neutral-800 pb-4 ">
         <motion.h1 
            initial={{y:-50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.25, duration:0.5}}
            className="my-20 text-center text-4xl"
         >
            Projects
         </motion.h1>

         <div className="flex flex-col gap-6">
            {PROJECTS.map(
                (project, idx) => (
                    <a key={idx}  href={project.link} className="flex flex-wrap lg:justify-center hover:cursor-pointer hover:bg-neutral-900 p-6 rounded-3xl transition-colors"> 
                       <motion.div 
                            initial={{x:-100,opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            transition={{delay:0.25, duration:0.5}}
                            className="w-full lg:w-1/4"
                        >
                            <img className="mb-6 rounded" width={150} height={150} src={project.image} alt={project.title} />
                        </motion.div>

                        <motion.div 
                            initial={{x:100,opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            transition={{delay:0.25, duration:1}}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="text-md font-semibold mb-2">
                                {project.title}
                            </h6>
                            <p className="mb-4 text-neutral-400">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-3 flex-wrap">
                                    {project.technologies.map(
                                        (tech, ix) => (
                                            <span key={ix} className="px-3 py-1 bg-neutral-800 text-sm rounded text-green-500" >
                                                {tech}
                                            </span>
                                        )
                                    )}
                            </div>

                       </motion.div>

                    </a>
                )
            )}
         </div>
    </div>
)