import { useIntersectionObserver } from 'hooks'
import React, {DetailedHTMLProps, HTMLAttributes, LegacyRef, MutableRefObject, useEffect, useRef, useState} from 'react'
import { DiamondSign } from './Shapes'

export interface IProjectcard {
  name: string
  description: string
  tech: string[]
  url: string
  image: string
  // ref?: MutableRefObject<null>
}
// DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const ProjectCard = ({name, description, tech, url, image}: IProjectcard) => {
  const refElement = useRef<HTMLDivElement>(null)
  const [isVisible, setIsvisible] = useState(false)
  // console.log("is element visible??== ", isVisible)

  const {setTargetRef, visible} = useIntersectionObserver()
 


  return (
    <div className={`project_card-container ${visible && "show-project"}`} >
      <div className="left" >
        {/* <h5 className='tech'>Technology Used</h5> */}
        <ul className='project-tech'>
          {tech.map((item, i) => (
            <li key={i}>
              {/* <DiamondSign /> */}
              <span>{item}</span>
          </li>
          ))}
        </ul>
      </div>

      <a href="http://google.com" target="_blank" rel="noopener noreferrer"
        className='center'
      >
        <div className="center-img" style={{backgroundImage: `url(${image})`}}>
        </div>
      </a>

      <div className="right">
        <h5 className='project-title'>{name}</h5>
        <p className='project-desc'>{description}</p>
      </div>
    </div>
  )
}