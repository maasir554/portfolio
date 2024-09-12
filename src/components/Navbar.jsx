
import logo from "../assets/logo.png"
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"

const Navbar = () => {
    return (
        <nav className="flex mb-20 items-center justify-between py-6">
            <div className="flex flex-shrink-0 items center">
                <img className="mx-2 w-16" src={logo} alt="Logo" />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://linkedin.com/in/maasir554"><FaLinkedin/></a>
                <a href="https://github.com/maasir554"><FaGithub/></a>
                <a href="https://instagram.com/maasir554"><FaInstagram/></a>
                <a href="https://x.com/maasir554"><FaSquareXTwitter/></a>
            </div>
        </nav>
    )
}

export default Navbar;
