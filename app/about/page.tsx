import NavBar from "../navbar";
import "./about.css"
import { PiRobot } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";



export default function About () {
    return (
        <>
            <NavBar/>
            <main className="about_main">
                <section className="about_text_section">
                    <div>
                        <p className="big_text"> I’M A FULL STACK DEVELOPER, BASED IN MOROCCO/AGADIR.</p>
                    </div>
                    <div className="interests">
                        <p>I’M INTERESTED IN LEARNING :</p>
                        <p>WEB DEVELOPMENT <FaLaptopCode /> .</p>
                        <p>MACHINE LEARNING AND AI <PiRobot /> .</p>
                        <p>CURRENTLY A STUDENT AT 1337 KHOURIBGA .</p>
                    </div>
                </section>
                <section className="image_section">
                    <img className="about_image" src="/me.jpeg"></img>
                </section>
            </main>
            <footer>
                <div><FaLinkedin/> LINKEDIN</div>
                <div><FaGithub /> GITHUB</div>
                <div><BiLogoGmail/> ISMAIL.ELBAKKOUCHI@GMAIL.COM</div>
            </footer>
        </>
    )
}