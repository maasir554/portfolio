
import logo from "../assets/logo.png"
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import { animate, motion } from "framer-motion"

const navIconVarient = (delay) => ({
    initial:{y:-50, opacity:0},
    animate:{y:0, opacity:1,
        transition: {delay:delay, duration:0.5}
    }
})

const Navbar = () => {
    return (
        <nav className="flex mb-20 items-center justify-between py-6">
            <motion.div className="flex flex-shrink-0 items center" initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.4, delay:0}} >
                <img className="mx-2 w-16" src={logo} alt="Logo" />
            </motion.div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <motion.a variants={navIconVarient(0)} initial="initial" whileInView="animate" href="https://linkedin.com/in/maasir554"><FaLinkedin/></motion.a>
                <motion.a variants={navIconVarient(0.25)} initial="initial" whileInView="animate" href="https://github.com/maasir554"><FaGithub/></motion.a>
                <motion.a variants={navIconVarient(0.5)} initial="initial" whileInView="animate" href="https://instagram.com/maasir554"><FaInstagram/></motion.a>
                <motion.a variants={navIconVarient(0.75)} initial="initial" whileInView="animate" href="https://x.com/maasir554"><FaSquareXTwitter/></motion.a>
            </div>
        </nav>
    )
}

export default Navbar;
