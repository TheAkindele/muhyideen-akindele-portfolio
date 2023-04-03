import React, { useContext, useState } from 'react'
import { AppContext } from 'utils/Context'
import { Button } from './Button'
import { FloatingLabelInput } from './Input'

type Props = {}

export const Contact = (props: Props) => {
  const {themeState} = useContext(AppContext)

  return (
    <section className='contact_container' id="contact">
        <span className='text-italic-open'>{"<contact me>"}</span>
        <main>
         <div className="header_text">
            <h2 className='title'>Contact Me</h2>
            <h2 className='title'>Contact Me</h2>
          </div>

          <section className='contact_section'>
            <p className='get-in-touch'>
              Get in touch with me via <a href="mailto:akindelemuhyideen@gmail.com">email</a>. <br /> 
              <br />
              I am always very excited to network and connect with you, talk about 
              new and interesting opportunities that are out there, 
              open to consultation and answering your questions.
            </p>
            
            <a href="mailto:akindelemuhyideen@gmail.com">
              <Button
                text="Send An Email"
                btnType='primary'
              />
            </a>

            <ul className='socials-box'>
              <li className='social'>
                <a href="https://github.com/TheAkindele" target="_blank" rel="noopener noreferrer">
                  <img src={themeState ? "/icons/github-white.png" : "/icons/github-black.png"} alt="" />
                </a>
              </li>
              
              <li className='social'>
                <a href="https://www.linkedin.com/in/muhyideen-akindele/" target="_blank" rel="noopener noreferrer">
                  <img src={themeState ? "/icons/linkedin-white.png" : "/icons/linkedin-black.png"} alt="" />
                </a>
              </li>
              
              {/* <li className='social'>
                <a href="https://www.instagram.com/this.gcfr.guy/" target="_blank" rel="noopener noreferrer">
                  <img src={themeState ? "/icons/instagram-colored.png" : "/icons/instagram-black.png"} alt="" />
                </a>
              </li> */}
              <li className='social'>
                <a href="https://twitter.com/MaverickHats" target="_blank" rel="noopener noreferrer">
                  <img src={themeState ? "/icons/twitter-white.png" : "/icons/twitter-black.png"} alt="" />
                </a>
              </li>
            </ul>
          </section>

          <p className='copyright text-secondary'>
            <span>Designed & developed by 
              <a href="http://github.com/TheAkindele" target="_blank" rel="noopener noreferrer"
                className='text-primary'
              >
                Muhyideen Akindele
              </a>
            </span>
            <span>&copy; 2023. All Rights Reserved</span>
          </p>
        </main>
        <span className='text-italic-close'>{"</contact me>"}</span>
    </section>
  )
}

export const ContactForm = () => {
  const [value, setValue] = useState('');

  return (
    <form className='form_container'>
      <FloatingLabelInput
        type="text"
        label="Your Name"
        value={value}
        setValue={setValue}
      />
    </form>
  )
}