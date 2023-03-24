import React, { useEffect, useState } from 'react'
import { Button } from 'components'
import { DiamondSign } from './Shapes'

type Props = {}

const skills = [
  "HTML5", "CSS3", "Javascript", "Typescript", "React", "Node"
]

export const About = (props: Props) => {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState(
    `I am a seasoned software engineer who has architectured and developed highly scalable frontend solutions and web experiences for individuals and businesses 
    across industries. I am equipped with diverse skill-set acquired over the years as a very enthusiastic individual, team member and team lead. 
    I am a supportive, creative thinker, energetic team player that is dedicated to providing solutions to challenges with user friendly, highly 
    automated software programs using relevant technologies. 
    <br />
    <br />
    When I'm not in work mode, I enjoy swimming, running, football, streaming the internet and outdoor activities.`
  )
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 40)
    }
  }, [index])


  return (
    <section className='about_container' id="about">
      <span className='text-italic-open'>{"<about me>"}</span>
      <main>
        <div className="header_text">
          <h2>about Me</h2>
          <h2>about Me</h2>
        </div>
        <section>
          <div className="left">
            <p className='about-me' dangerouslySetInnerHTML={{ __html: text }}>
              {/* I am a seasoned software engineer who has architectured and developed highly scalable frontend solutions and web experiences for individuals and businesses 
              across industries. I am equipped with diverse skill-set acquired over the years as a very enthusiastic individual, team member and team lead. 
              I am a supportive, creative thinker, energetic team player that is dedicated to providing solutions to challenges with user friendly, highly 
              automated software programs using relevant technologies. 
              <br />
              <br />
              When I'm not in work mode, I enjoy swimming, running, football, streaming the internet and outdoor activities. */}
            </p>
            <br />

            <div className='skillset'>
              <p className='text-secondary'>I am highly skilled in the following techologies;</p>
              <ul>
                {skills.map((item, i) => (
                  <li style={{display: "flex"}} key={i}>
                    <Button btnType="secondary" text={item} />
                </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right">
            {/* <img src="./icons/headshot-min.jpg" alt="me" /> */}
            <PictureSlider />
          </div>
        </section>
      </main>
      <span className='text-italic-close'>{"<about me>"}</span>
    </section>
  )
}

const PictureSlider = () => {
  return (
    <div className="gallery"> 
      <img src="/images/muy-1.jpg" alt="" />
      <img src="/images/headshot-min.jpg" alt="" />
      <img src="/images/muy-2.PNG" alt="" />
      {/* <img src="/images/muyi-4.jpg" alt="" /> */}
    </div>
  )
}