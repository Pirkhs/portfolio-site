import '../styles/App.css'
import About from './About'
import Contact from './Contact'
import Intro from './Intro'
import NavBar from './NavBar'
import Projects from './Projects'
import SkillsTechnologies from './Skills&Technologies'

export default function App() {


  return (
    <>
      <NavBar/>
      <div className="margin">
        <Intro/>
      </div>
      <About/>
      <Projects/>
      <SkillsTechnologies/>
      <Contact/>
    </>
  )
}

