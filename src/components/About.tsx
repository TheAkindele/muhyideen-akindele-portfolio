import { Button } from 'components'
import { myPhoto } from 'assets'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

type Props = {}

const skills = [
  "HTML5", "CSS3", "Javascript", "Typescript", "React", "Node", "Express"
]

export const About = (props: Props) => {

  return (
    <section className='about_container' id="about">
      <span className='text-italic-open'>{"<about me>"}</span>
      <main>
        <div className="header_text" id="about-header">
          <h2 className='title'>about Me</h2>
          <h2 className='title'>about Me</h2>
        </div>
        <section>
          <div className="left">
          <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
            <p className='about-me text-primary'>
              Hi, my name is
              <span className='my-name'> Muhyideen Akindele</span>
              {/* <span className="header_text">
                <span className='title'>Muhyideen Akindele</span>
                <span className='title'>Muhyideen Akindele</span>
              </span> */}
              . I am a seasoned software engineer who has architectured and developed highly scalable frontend solutions and web experiences for individuals and businesses 
              across industries. I am equipped with diverse skill-set acquired over the years as a very enthusiastic individual, team member and team lead. 
              I am a supportive, creative thinker, energetic team player that is dedicated to providing solutions to challenges with user friendly, highly 
              automated software programs using relevant technologies. 
              <br />
              <br />
              When I'm not in work mode, I enjoy swimming, running, football, streaming the internet and outdoor activities.
            </p>
          </AnimationOnScroll>
            <br />
            <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={60} animateOnce={true}>
            <div className='skillset'>
              <p className='about-me text-primary'>I am skilled in the following techologies;</p>
              <ul>
                {skills.map((item, i) => (
                  <li style={{display: "flex"}} key={i}>
                    <Button btnType="secondary" text={item} className="text-secondary" />
                </li>
                ))}
              </ul>
            </div>
            </AnimationOnScroll>
          </div>
          
          <div className="right">
          <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={40} animateOnce={true}>
            <div className="pics_box ">
              <img src={myPhoto} alt="" />
            </div>
            </AnimationOnScroll>
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