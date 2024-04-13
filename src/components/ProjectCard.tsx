import { useOnScreen } from "hooks"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

import { useInView } from "react-intersection-observer"

export interface IProjectcard {
  name: string
  description: string
  tech: string[]
  url: string
  image: string
}

export const ProjectCard = ({
  name,
  description,
  tech,
  url,
  image,
}: IProjectcard) => {
  const elementRef = useRef<HTMLDivElement>(null)

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
  }, [control, inView])

  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  }

  return (
    <motion.div
      className="project_card-container"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className={`project_card-container`} ref={elementRef}>
        <div className="left">
          {/* <h5 className='tech'>Technology Used</h5> */}
          <ul className="project-tech">
            {tech.map((item, i) => (
              <li key={i}>
                {/* <DiamondSign /> */}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="center"
        >
          <div
            className="center-img"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </a>

        <div className="right">
          <h5 className="project-title">{name}</h5>
          <p className="project-desc">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
