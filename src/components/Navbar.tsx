import React, { useState, useRef, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";
import { HamburgerSvg } from './HamburgerSvg';
import { AppContext } from 'utils/Context';
import { darkThemeSwitch, lightThemeSwitch } from 'utils';
import { Sidebar } from './Sidebar';

type Props = {}

export const Navbar = (props: Props) => {
    const navigate = useNavigate()
    // const {hash} = useLocation()
    // console.log("location---", hash)

    const [active, setActive] = useState("landing")
    const [hamburger, sethamburger] = useState(false)
    const [side, setSide] = useState(false)

    const {themeState, themeToggle} = useContext(AppContext)

    console.log("side status== ", side)

    const toggleSide = () => setSide(!side)

    const scrollFun = (id: string) => {
        document
          .querySelector(`#${id}`)
          ?.scrollIntoView({ block: "center", behavior: "smooth" });
       
        setActive(id)
    };

    const scrollWithOffset = (el: any) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

  return (
    <nav className='nav'>
        <span className='text-italic'>{"<nav>"}</span>
        <p className='my-logo' onClick={() => {
            scrollFun("landing")
            navigate("/")
        }}>
            MA
        </p>
        <div className='nav_container'>
            <span className={`text-primary nav_link ${active === "about" ? "nav_active" : ""}`}
                onClick={() => scrollFun("about")}
            >
                <HashLink
                    smooth
                    to="/#about"
                    scroll={(el: any) => scrollWithOffset(el)}
                    className="text-primary nav_link-menu"
                >
                About
                </HashLink>
            </span>

            <span className={`text-primary nav_link ${active === "projects" ? "nav_active" : ""}`}
                onClick={() => scrollFun("projects")}
            >
                <HashLink
                    smooth to="/#projects"
                    scroll={(el: any) => scrollWithOffset(el)}
                    className="text-primary nav_link-menu"
                >
                Projects
                </HashLink>
            </span>

            <span className={`text-primary nav_link ${active === "contact" ? "nav_active" : ""}`}
                onClick={() => scrollFun("contact")}
            >
                <HashLink
                    smooth to="/#contact"
                    scroll={(el: any) => scrollWithOffset(el)}
                    className="text-primary nav_link-menu"
                >
                Contact Me
                </HashLink>
            </span>
        </div>

        <img 
            src={themeState ? "./icons/sun.svg" : "./icons/moon.svg"}
            alt="theme" 
            style={{cursor: "pointer"}}
            onClick={() => themeToggle && themeToggle()} 
        />

        <aside className={`sider ${side ? "side_open" : "side_close"}`}>
            <Sidebar />
        </aside> 

        <HamburgerSvg 
            status={hamburger} 
            onClick={() => {
                sethamburger(!hamburger)
                setSide(!side)
            }} 
        />
        <span className='text-italic'>{`</nav>`}</span>
    </nav>
  )
}