import '../styles/Skills&Technologies.css'
import { GoCpu } from "react-icons/go";
import { TiTick } from "react-icons/ti";

export default function SkillsTechnologies () {
    return (
        <section id="skills" className="section-skills">
            <header className="title">
                <GoCpu className="skills-icon" />
                <h2 className="title-skills"> Skills & Technologies </h2>
                <h3 className="title-description"> I have dedicated this section to highlight the different skills and technologies I have used in the past</h3>
            </header>
            <div className="container-skills">
                <span className="skill-card"> <TiTick className="skill-card-icon" /> <p> HTML </p> </span> 
                <span className="skill-card"> <TiTick className="skill-card-icon"/> <p> CSS </p> </span> 
                <span className="skill-card"> <TiTick className="skill-card-icon"/> <p> JavaScript </p> </span> 
                <span className="skill-card"> <TiTick className="skill-card-icon"/> <p> Node </p> </span> 
                <span className="skill-card"> <TiTick className="skill-card-icon"/> <p> React.js </p> </span> 
                <span className="skill-card"> <TiTick className="skill-card-icon"/> <p> React Native </p> </span> 
                <span className="skill-card"> <TiTick className="skill-card-icon"/> <p> Firebase </p> </span> 
                <span className="skill-card"> <TiTick className="skill-card-icon"/> <p> PSQL </p> </span> 
                <span className="skill-card"> <TiTick className="skill-card-icon"/> <p> Express.js </p> </span> 

            </div>
        </section>
    )
}