import '../styles/Projects.css'
import { GrProjects } from "react-icons/gr";

export default function Projects () {
    const imageHover = (e) => {
        // show project title, description, and github button
    }

    const ImageLeave = (e) => {
        // revert
    }

    return (
            <section id="projects" className="projects-section"> 

                <header className="title">
                    <GrProjects className="projects-icon"/>
                    <h2 className="title-projects"> Projects </h2>
                    <h3 className="title-description"> This section is dedicated to the projects of which I have completed and willing to showcase. I hope to add to this section with other diverse projects that use different frameworks and languages over time.</h3>
                </header>
                
                <div className="container-projects">
                    <div id="project-1" className="project-card" onMouseEnter={(e) => {imageHover(e)}}>
                        <p className="project-title">  'NC News' Back End Web API  </p>
                            <br></br>
                            <p className="project-description"> A fairly simple and free-to-use web api service that allows for queries to a PSQL database regarding comments, articles and users. </p>
                            <br></br>
                            <img className="project-img" src="https://i.ibb.co/Dgwqvyf/Screenshot-from-2024-04-19-16-14-51.png" alt="NC News Back End API Screenshot"></img>
                            <br></br>
                            <a href="https://github.com/Pirkhs/nc-news" className="view-more"> Github Repository</a>
                    </div>

                    <div id="project-2" className="project-card" onMouseEnter={(e) => {imageHover(e)}}>
                        <p className="project-title">  'NC News' Front End User Interface  </p>
                            <br></br>
                            <p className="project-description"> The corresponding NC News front end application that makes requests to the back end api to 'populate' the page with data for the user to interact with </p>
                            <br></br>
                            <img className="project-img" src="https://i.ibb.co/k9rbDXT/Screenshot-from-2024-04-19-16-41-17.png" alt="Screenshot of the NC News UI on the individual article section"></img>
                            <br></br>
                            <a href="https://github.com/Pirkhs/fe-nc-news" className="view-more"> Github Repository</a>
                    </div>
                    <div id="project-3" className="project-card" onMouseEnter={(e) => {imageHover(e)}}>
                        <p className="project-title">  'Plan Perfect' Mobile App  </p>
                            <br></br>
                            <p className="project-description"> A group project completed as part of the Northcoders bootcamp's project phase. This mobile app allows uers to create their own trip itineraries and add specific activities to them, which can be viewed on their profile's calendar </p>
                            <br></br>
                            <img className="project-img" src="https://i.ibb.co/8KJ8CZy/Plan-Perfect.png" alt="Background image for the Plan Perfect mobile app"></img>
                            <br></br>
                            <a href="https://github.com/FredR0101/Plan-Perfect-2" className="view-more"> Github Repository</a>
                    </div>
                    <div id="project-4" className="project-card" onMouseEnter={(e) => {imageHover(e)}}>
                        <p className="project-title">  'Bankist' Web Page  </p>
                            <br></br>
                            <p className="project-description"> This professional looking front end web application uses page scrolling and event listeners to create a truly smooth and interactive user experience. Credit for this project goes to Jonas Schmedtmann as part of his Udemy course </p>
                            <br></br>
                            <img className="project-img" src="https://i.ibb.co/F7k34Cj/Screenshot-from-2024-04-19-19-19-11.png" alt="Screenshot of the Bankist front page"></img>
                            <br></br>
                            <a href="https://github.com/Pirkhs/Complete-JavaScript-Course/tree/main/13-Advanced-DOM-Bankist/starter" className="view-more"> Github Repository</a>
                    </div>
                    <div id="project-5" className="project-card" onMouseEnter={(e) => {imageHover(e)}}>
                        <p className="project-title">  'Bankist' Front End User Application   </p>
                            <br></br>
                            <p className="project-description"> The corresponding user application to go along side the webpagem, allowing users to log into their account, deposit digital money, request loans, and transfer money. As well as making use of dates and timers to account for automatic timeout after user inactivity. Once again full credit for this project goes towards Jonas Schmedtmann and his course on Udemy </p>
                            <br></br>
                            <img className="project-img" src="https://i.ibb.co/89n6QSS/Screenshot-from-2024-04-19-21-07-46.png" alt="Screenshot for the users account page when logging into the Bankist app"></img>
                            <br></br>
                            <a href="https://github.com/Pirkhs/Complete-JavaScript-Course/tree/main/12-Numbers-Dates-Timers-Bankist" className="view-more"> Github Repository</a>
                    </div>
                </div>

            </section>
    )
}