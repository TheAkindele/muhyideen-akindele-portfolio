import React, { useState, useRef, useContext } from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";
import { HamburgerSvg } from './HamburgerSvg';
import { AppContext } from 'utils/Context';
import { darkThemeSwitch, lightThemeSwitch } from 'utils';

type Props = {}

export const Navbar = (props: Props) => {
    const [active, setActive] = useState("landing")
    const [hamburger, sethamburger] = useState(false)

    const {themeState, themeToggle} = useContext(AppContext)
    console.log("nav context sttae== ", themeState, "themeToggle== ", themeToggle)

    const el = useRef<null | HTMLDivElement>(null); 

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
        <p className='my-logo' onClick={() => scrollFun("landing")}>
            MA
        </p>
        <div className='nav_container'>
            {/* <span className={`nav_link ${active === "landing" ? "nav_active" : ""}`}
                onClick={() => scrollFun("landing")}
            >
                 Home
            </span> */}

            <span className={`text-primary nav_link ${active === "about" ? "nav_active" : ""}`}
                onClick={() => scrollFun("about")}
            >
                {/* <HashLink
                    smooth
                    to="/#about"
                    scroll={(el: any) => scrollWithOffset(el)}
                > */}
                About
                {/* </HashLink> */}
            </span>
            
            <span className={`text-primary nav_link ${active === "project" ? "nav_active" : ""}`}
                onClick={() => scrollFun("project")}
            >
                Projects
            </span>
            <span className={`text-primary nav_link ${active === "contact" ? "nav_active" : ""}`}
                onClick={() => scrollFun("contact")}
            >
                {/* <HashLink
                    smooth to="/#contact"
                    scroll={(el: any) => scrollWithOffset(el)}
                    className="nav_link-menu"
                > */}
                Contact Me
                {/* </HashLink> */}
            </span>
            
        </div>
        {/* <span className='text-primary ' style={{cursor: "pointer"}} 
                onClick={() => themeToggle && themeToggle()}
        >
                Switch
        </span> */}
        <img 
            src={themeState ? "./icons/sun.svg" : "./icons/moon.svg"}
            alt="theme" 
            style={{cursor: "pointer"}}
            onClick={() => themeToggle && themeToggle()} 
        />

        <HamburgerSvg status={hamburger} onClick={() => sethamburger(!hamburger)} />
        <span className='text-italic'>{`</nav/>`}</span>
    </nav>
  )
}