
import "../styles/NavBar.css"

export default function NavBar () {
    return (
        <>
            <nav>
                <h1 className="name text-white"> Nathan Briers </h1>

                    <span className="links">
                        <a className="link" href="#about"> About</a>
                        <br></br>
                        <a className="link" href="#projects"> Projects</a>
                        <br></br>
                        <a className="link" href="#skills"> Skills & Technologies</a>
                    </span>
                    
                    <a href="#contact" className=" contact-me text-white"> Contact Me </a>
                    
            </nav>
        </>
    )
}