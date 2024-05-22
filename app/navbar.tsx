import Link from "@/node_modules/next/link"
import "./navbar.css"

export default function NavBar() {
    return (
        <div className="nav_container">
            <div>
                ISMAIL EL BAKKOUCHI
            </div>
            <div>
                <ul>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} href="/"><li>ABOUT</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} href="/skills"><li>SKILLS</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} href="/projects"><li>PROJECTS</li></Link>
                </ul>
            </div>
        </div>
    )
}