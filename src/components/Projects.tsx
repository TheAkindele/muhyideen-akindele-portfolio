import { useIntersectionObserver } from 'hooks'
import React, { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { projectData } from 'utils/projectData'
import { Button } from './Button'
import { ProjectCard } from './ProjectCard'

type Props = {}

const projectArr = [
  1, 2, 3, 4, 5, 6
]

export const Projects = (props: Props) => {
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const {visible, setTargetRef} = useIntersectionObserver()


  return (
    <section className='project_container' id="projects">
        <span className='text-italic-open'>{"<projects>"}</span>
        <main className='project_main'>
          <div className="header_text">
            <h2>My Projects</h2>
            <h2>My Projects</h2>
          </div>
          <section className='project-wrapper'>
            {(pathname === "/" ? projectData.slice(0, 3) : projectData).map((item, i) => (
              <ProjectCard
                key={i}
                name={item.name}
                description={item.description}
                tech={item.tech}
                image={item.image}
                url={item.url}
              />
            ))}
          </section>
          {pathname === "/" && 
          <Button
            text="View More Projects"
            btnType='primary'
            onClick={() => navigate("/projects")}
          />}
        </main>
        <span className='text-italic-close'>{"</projects>"}</span>
    </section>
  )
}