import NavBar from "../navbar";
import "./skills.css"
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";



export default function Skills () {
    return (
        <>
            <NavBar></NavBar>
            <main>
                <div>
                    <p className="big_text_skills"> CREATING WEB PAGES USING THE FOLLOWING TECHNOLOGIES :</p>
                </div>
                <div className="skills">
                    <div className="title"><p >UI/UX </p></div>
                    <div className="icon">
                        <img className="icon_size" src="/figma.png"/>
                        <p>FIGMA</p>
                    </div>
                    <div className="icon">
                        <img className="icon_size" src="/canva.png"/>
                        <p>CANVAS</p>
                    </div>
                </div>
                <div className="skills">
                    <div className="title"><p>FRONT END </p></div>
                    <div className="icon">
                        <img className="icon_size" src="/html.png"/>
                        <p>HTML</p>
                    </div>
                    <div className="icon">
                        <img className="icon_size" src="/css.png"/>
                        <p>CSS</p>
                    </div>
                    <div className="icon">
                        <img className="icon_size" src="/js.png"/>
                        <p>JAVA SCRIPT</p>
                    </div>
                    <div className="icon">
                        <img className="icon_size" src="/react.png"/>
                        <p>REACT</p>
                    </div>
                    <div className="icon">
                        <img className="icon_size" src="/nextjs.png"/>
                        <p>NEXTJS</p>
                    </div>
                </div>
                <div className="skills">
                    <div className="title"><p>BACK END</p></div>
                    <div className="icon">
                        <img className="icon_size" src="/nodejs.png"/>
                        <p>NODEJS</p>
                    </div>
                    <div className="icon">
                        <img className="icon_size" src="/nestjs.png"/>
                        <p>NESTJS</p>
                    </div>
                    <div className="icon">
                        <img className="icon_size" src="/postgres.png"/>
                        <p>POSTGRES</p>
                    </div>
                </div>
                <div><p className="future_work">STILL WORKING ON MY AI AND MACHILE LEARNINCG SKILLS ....</p></div>
            </main>
            <footer>
                <div><a href="https://www.linkedin.com/in/ismail-el-bakkouchi-a17429225/" target="_blank"><FaLinkedin/> LINKEDIN</a></div>
                <div><a href="https://github.com/iel-bakk" target="_blank"> <FaGithub /> GITHUB</a></div>
                <div><BiLogoGmail/> ISMAIL.ELBAKKOUCHI0@GMAIL.COM</div>
            </footer>
        </>
    )
}