"use client";
import NavBar from "../navbar";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import "./projects.css"

export default function Projects () {

  const projects = [
    {name : "INCEPTION", image: "/inception.png"},
    {name : "IRC", image: "/irc.png"},
    {name : "WEB PONG", image: "/transcendence.png"},
    {name : "WORDLE GAME", image: "/wordle.png"},
    {name : "2D GAME", image: "/solong.png"},
    {name : "MINISHELL", image: "/shell.png"},
  ]

  return (
    <div>
      <NavBar></NavBar>
      <main>
        <div>
          <p className="big_text_projects">SOME PROJECTS :</p>
        </div>
        <div className="projects_parent">
        {projects.map((project) => {
          return (
          <div key={project.name} className="project_icon">
            <img className="project_image" src={project.image} alt={project.name} />
            <p>{project.name}</p>
          </div>
          )
        })}
        </div>
      </main>
      <footer className="footer_style">
        <div><a href="https://www.linkedin.com/in/ismail-el-bakkouchi-a17429225/" target="_blank"><FaLinkedin/> LINKEDIN</a></div>
        <div><a href="https://github.com/iel-bakk" target="_blank"> <FaGithub /> GITHUB</a></div>
        <div><BiLogoGmail/> ISMAIL.ELBAKKOUCHI0@GMAIL.COM</div>
      </footer>
    </div>
    )
}