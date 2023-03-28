
import { Button } from '.'
import Typewriter from 'typewriter-effect';

type Props = {}


export const LandingPage = (props: Props) => {
  
  return (
    <section className='landing_container' id="landing">
      <span className='text-italic-open'>{"<landing page>"}</span>
      <main>
        <p className='landing_welcome text-secondary'>
          <span>Holla 👋, I'm</span> 
          <span className='landing_name'>Muhyideen</span>,
        </p>

        <p className='landing_summary' id="summary" >
           A creative software engineer building 
            <br />
            exceptional web experiences.
        </p>

        <a href="https://docs.google.com/document/d/1mrQ3gzTim5bE1uYS7SZ3xA-izz9-gX3VhZ0yxQSlyjc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" 
          className='download-btn'
        >
          <Button
            text="Resume" 
            btnType="primary" 
            className='landing_btn'
          />
        </a>
        
      </main>

      <span className='text-italic-close'>{"</landing page>"}</span>
    </section>
  )
}