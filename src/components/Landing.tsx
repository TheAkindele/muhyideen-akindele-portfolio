
import { Button } from '.'

type Props = {}


export const LandingPage = (props: Props) => {
  
  return (
    <section className='landing_container' id="landing">
      <span className='text-italic-open'>{"<landing page>"}</span>
      <main>
        <p className='landing_welcome text-primary'>
          <span className='holla'>Holla 👋, I'm</span> 
          {/* <span className='landing_name'>Muhyideen</span>, */}
          <span className="header_text">
            <span className='title'>Muhyideen</span>
            <span className='title'>Muhyideen</span>
          </span>
          {/* , */}
        </p>

        <p className='landing_summary text-primary' id="summary" >
           A creative software engineer building 
            <br />
            exceptional web experiences.
        </p>
        {/* <p id="the-logo" onClick={() => {
            // scrollFun("landing")
            // navigate("/")
        }}>
            MA
        </p> */}

        <a href="https://docs.google.com/document/d/1SfsHW6eD_Ru4JZwM5EFd6tBO2A_ZMRyIInGwqpZCfOY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" 
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