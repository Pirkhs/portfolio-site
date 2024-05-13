
import "../styles/NavBar.css"

export default function NavBar () {
    return (
        <>
            <nav>
                <h1 className="name text-white"> Nathan Briers </h1>

                    <span className="links">
                        <a className="link" href="#about"> About</a>
                        <a className="link" href="#projects"> Projects</a>
                        <a className="link" href="#skills"> Skills & Technologies</a>
                        {/* <a href="#contact" className=" link contact-me text-white"> Contact Me </a> */}
                    </span>
                    
                    
            </nav>
        </>
    )
}