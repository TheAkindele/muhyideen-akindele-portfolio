import { About, LandingPage, Contact, Projects } from 'components'
import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

type Props = {}


export const HomePage = (props: Props) => {
  const navigate = useNavigate()

  // const observer = new IntersectionObserver((entries, obs) => {
  //   console.log("entries== ", entries)
  // }, {
  //   threshold: 1
  // })

  // useEffect(() => {
  //   const projectCards = document.querySelectorAll(".project_card-container")

    
  //   observer.observe(projectCards[0])
  // }, [])

  return (
    <div className='home_container' id="home">
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}