import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVarients = duration => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            delay:0,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse"
        }
    },

})

export const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
                initial={{y:-75,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:0.75}}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h1>

            <motion.div 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:0.75, delay:0.5}}
                className="flex justify-center items-start flex-wrap gap-4"
            >
               
                <motion.div
                    variants={iconVarients(2.25)}
                    animate="animate"
                    initial="initial"
                    className="rounded-xl p-4 bg-neutral-900 border-4 border-neutral-800 text-7xl">
                    <RiReactjsLine className="text-cyan-500" />
                </motion.div>

                <motion.div
                variants={iconVarients(1.5)}
                animate="animate"
                initial="initial" 
                className="rounded-xl p-4 bg-neutral-900 border-4 border-neutral-800 text-7xl">
                    <SiNextdotjs className="text-neutral-200" />
                </motion.div>

                <motion.div
                variants={iconVarients(2)}
                animate="animate"
                initial="initial" 
                className="rounded-xl p-4 bg-neutral-900 border-4 border-neutral-800 text-7xl">
                    <SiMongodb className="text-green-500" />
                </motion.div>
                
                <motion.div
                variants={iconVarients(1)}
                animate="animate"
                initial="initial" 
                className="rounded-xl p-4 bg-neutral-900 border-4 border-neutral-800 text-7xl">
                    <SiTailwindcss className="text-cyan-500" />
                </motion.div>
                
                <motion.div 
                variants={iconVarients(2)}
                animate="animate"
                initial="initial"
                className="rounded-xl p-4 bg-neutral-900 border-4 border-neutral-800 text-7xl">
                    <FaJs className="text-yellow-500" />
                </motion.div>
            </motion.div>
        </div>
    )
}