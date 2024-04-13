import { useNavigate, useLocation } from "react-router-dom"
import { projectData } from "utils/projectData"
import { Button } from "./Button"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <section className="project_container" id="projects">
      <span className="text-italic-open">{"<projects>"}</span>
      <main className="project_main">
        <div className="header_text">
          <h2 className="title">My Projects</h2>
          <h2 className="title">My Projects</h2>
        </div>
        <section className="project-wrapper">
          {(pathname === "/" ? projectData.slice(0, 3) : projectData).map(
            (item, i) => (
              <ProjectCard
                key={i}
                name={item.name}
                description={item.description}
                tech={item.tech}
                image={item.image}
                url={item.url}
              />
            )
          )}
        </section>
        {pathname === "/" && (
          <div className="project_btn-box">
            <Button
              text="View More Projects"
              btnType="primary"
              onClick={() => navigate("/projects")}
            />
          </div>
        )}
      </main>
      <span className="text-italic-close">{"</projects>"}</span>
    </section>
  )
}
