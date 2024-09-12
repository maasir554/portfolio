
import {HERO_CONTENT} from "../constants"
import profilePicture from "../assets/MohammadMaasirProfile.webp"

export const Hero = () => {
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl lg:text-8xl font-thin tracking-tight lg:mt-16">
                            Mohammad Maasir
                        </h1>
                        <span className="bg-gradient-to-r from-yellow-300 via-slate-500 to-green-500 bg-clip-text tracking-tight text-4xl text-transparent">
                            Full Stack Developer
                        </span>
                        <p className="my-2 py-6 max-w-xl font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img className="rounded-2xl" src={profilePicture} alt="Mohammad Maasir" width={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}