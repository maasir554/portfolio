import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

export const Experience = () => (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1  
            initial={{y:-100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.5, duration:1}}
            className="my-20 text-center text-4xl"
        >
            Experience
        </motion.h1>
        <div className="flex flex-col gap-8 items-center justify-start">
            {EXPERIENCES.map( (exp, index) => (
                <div key={index} className="flex flex-wrap lg:justify-center w-full"> 
                    <motion.div 
                        initial={{x:-100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:0.5,delay:0.25}}
                        className="w-full lg:w-1/4"
                    >
                         <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
                    </motion.div>
                    <motion.div 
                        initial={{x:100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:0.5,delay:0.25}}
                        className="w-full max-w-xl lg:w-3/"
                    >
                        <h6 className="mb-2 font-semibold">
                            {exp.role} - <span className="text-purple-100">{exp.company}</span>
                        </h6>
                        <p className="mb-4 text-neutral-400">
                            {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {exp.technologies.map( (tech, idx) => (
                                <span key={idx} className="px-4 py-2 bg-neutral-900 text-green-500 rounded-lg"> {tech} </span>
                            ) )}
                        </div>
                    </motion.div>
                </div>
            ) )}
        </div>
    </div>
)