import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJs } from "react-icons/fa";

export const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">
                Technologies
            </h1>

            <div className="flex justify-center items-start flex-wrap gap-4">
                <div className="rounded-xl p-4 bg-neutral-900 border-4 border-neutral-800 text-7xl">
                    <RiReactjsLine className="text-cyan-500" />
                </div>

                <div className="rounded-xl p-4 bg-neutral-900 border-4 border-neutral-800 text-7xl">
                    <SiNextdotjs className="text-neutral-200" />
                </div>

                <div className="rounded-xl p-4 bg-neutral-900 border-4 border-neutral-800 text-7xl">
                    <SiMongodb className="text-green-500" />
                </div>
                
                <div className="rounded-xl p-4 bg-neutral-900 border-4 border-neutral-800 text-7xl">
                    <SiTailwindcss className="text-cyan-500" />
                </div>
                
                <div className="rounded-xl p-4 bg-neutral-900 border-4 border-neutral-800 text-7xl">
                    <FaJs className="text-yellow-500" />
                </div>
            </div>
        </div>
    )
}