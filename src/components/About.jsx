import '../styles/About.css'
import { FaPerson } from "react-icons/fa6";

export default function About () {
    return (
    
        <div id="about" className="container-about">

            <section className="about-me">
                <header className="title">
                    <FaPerson color="grey" />
                    <h2> About Me </h2>
                    <h3 className="title-description"> This section is dedicated to some frequently asked questions for me to introduce myself </h3>
                </header>

                <br></br>

                <div className="container-cards">
                    <div className="card">
                        <p className="question">  Q: Describe yourself  </p>
                        <br></br>
                        <p className="answer"> I am Nathan Briers, a 19 year old with a passion for tech and a willingness to learn new things  </p>
                    </div>
                    <div className="card">
                        <p className="question">  Q: How long have you been a software developer? </p>
                        <br></br>
                        <p className="answer"> My only real professional experience with coding is through the Northcoders bootcamp which lasted 13 weeks. The rest of my time is spent on self-taught online courses. </p>
                    </div>
                    <div className="card">
                        <p className="question">  Q: Why software development? </p>
                        <br></br>
                        <p className="answer"> I see true joy and excitement from completing projects and showcasing them with the world </p>
                    </div>
                    <div className="card">
                        <p className="question">  Q: Where can I view your projects?  </p>
                        <br></br>
                        <p className="answer"> Beneath this section there is a section dedicated to all the projects I have completed and willing to showcase. Please take the time to click on them and view their associated github repositories  </p>
                    </div>
                    <div className="card">
                        <p className="question">  Q: Where are you from? </p>
                        <br></br>
                        <p className="answer"> My birthplace is St Helens, Merseyside, and I have lived there my entire life </p>
                    </div>
                    <div className="card">
                        <p className="question">  Q: How can I contact you? </p>
                        <br></br>
                        <p className="answer"> You can be taken to view my contact information by using the button in the top right, or by scrolling to the footer of this page yourself. </p>
                    </div>

                </div>

            </section>

        </div>
    )
}