import '../styles/Contact.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Contact () {
    return (
        <footer id="contact" className="section-contact">
            <header className="title">
                <h2 className="title-contact"> Contact Me </h2>
                <h3 className="title-description"> Feel free to contact me on any of the platforms linked below </h3>
            </header>
            <span className="platforms"> 
                {/* <p className="platform"> <FaInstagram /> Instagram </p> */}
                <a className="platform" href="https://www.linkedin.com/in/nathan-briers-47b61125b/"> <FaLinkedin color="#0a66c2" /> LinkedIn </a>
                <a className="platform"> <SiGmail color="red" /> nathan.briers32@gmail.com </a>
                <a className="platform" href="https://github.com/Pirkhs"> <FaGithub /> GitHub </a>
                <br></br>
            </span>
            <span className="container-view-cv">
                <a className="view-cv" href="https://drive.google.com/file/d/1ZKXqOGLIlYppp75rfCXafW_Ye6cyQDeO/view?usp=drive_link"> View CV </a>   
            </span>
        </footer>
    )
}