import { EXPERIENCES } from "../constants"

export const Experience = () => (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
            Experience
        </h1>
        <div className="flex flex-col gap-8 items-center justify-start">
            {EXPERIENCES.map( (exp, index) => (
                <div key={index} className="flex flex-wrap lg:justify-center w-full"> 
                    <div className="w-full lg:w-1/4">
                         <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/">
                        <h6 className="mb-2 font-semibold">
                            {exp.role} - <span className="text-purple-100">{exp.company}</span>
                        </h6>
                        <p className="mb-4 text-neutral-400">
                            {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {exp.technologies.map( (tech, idx) => (
                                <span key={idx} className="px-4 py-2 bg-neutral-900 text-purple-500 rounded-lg"> {tech} </span>
                            ) )}
                        </div>
                    </div>
                </div>
            ) )}
        </div>
    </div>
)