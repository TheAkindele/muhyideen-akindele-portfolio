import { Button, ProjectCard } from 'components'
import React from 'react'
import { projectData } from 'utils/projectData'

type Props = {}

export const ProjectsPage = (props: Props) => {
  return (
    <section className='project_container' id="projects">
        <span className='text-italic-open'>{"<projects>"}</span>
        <main className='project_main'>
        <div className="header_text">
          <h2>My Projects</h2>
          <h2>My Projects</h2>
        </div>
          <section className='project-wrapper'>
            {projectData.map((item, i) => (
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
          {/* <Button
            text="View More Projects"
            btnType='primary'
            onClick={() => navigate("/projects")}
          /> */}
        </main>
        <span className='text-italic-close'>{"</projects>"}</span>
    </section>
  )
}