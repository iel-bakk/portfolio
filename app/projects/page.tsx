import NavBar from "../navbar";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import "./projects.css"

export default function Projects () {
    return (
    <div>
      <NavBar></NavBar>
      <main>
        <div>
          <p className="big_text_projects">SOME PROJECTS :</p>
        </div>
        <div className="projects_parent">
          <div className="project_icon">
            <img className="project_image" src="/inception.png" alt="inception" />
            <p>INCEPTION</p>
          </div>
          <div className="project_icon">
            <img className="project_image" src="/irc.png" alt="irc" />
            <p>IRC</p>
          </div>
          <div className="project_icon">
            <img className="project_image" src="/transcendence.png" alt="transcendence" />
            <p>WEB PONG</p>
          </div>
          <div className="project_icon">
            <img className="project_image" src="/wordle.png" alt="wordle" />
            <p>WORDLE GAME</p>
          </div>
          <div className="project_icon">
            <img className="project_image" src="/solong.png" alt="solong" />
            <p>2D GAME</p>
          </div>
          <div className="project_icon">
            <img className="project_image" src="/shell.png" alt="minishell" />
            <p>MINISHELL</p>
          </div>
        </div>
      </main>
      <footer>
        <div><a href="https://www.linkedin.com/in/ismail-el-bakkouchi-a17429225/" target="_blank"><FaLinkedin/> LINKEDIN</a></div>
        <div><a href="https://github.com/iel-bakk" target="_blank"> <FaGithub /> GITHUB</a></div>
        <div><BiLogoGmail/> ISMAIL.ELBAKKOUCHI0@GMAIL.COM</div>
      </footer>
    </div>
    )
}