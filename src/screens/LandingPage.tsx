import React from 'react'
import {useNavigate} from "react-router-dom"
import { Button } from '../components'

type Props = {}

// export const BtnText = ({text, img}: any) => {
//   return (
//     <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
//       <span>{text}</span>
//       <img src={img} alt="" style={{width: "2rem", height: "1.5rem", }}/>
//     </div>
//   )
// }

export const LandingPage = (props: Props) => {
  const navigate = useNavigate()

  return (
    <section className='landing_container' id="landing">
      <span className='text-italic-open'>{"<landing page>"}</span>
      <main>
        <p className='landing_welcome text-secondary'>
            <span className='text-secondary'> Holla </span>
            <span role="img" aria-label="sheep">👋, </span>
            <span> welcome to my space</span>
        </p>

        <div className='landing_intro'>
            <span className='landing_iam'>I am </span>

            <div className='landing_name-box'>
              <span className='landing_name'>Muhyideen Akindele</span>
            </div>
        </div>

        <p className='landing_summary'>
            A creative 
            <span className='shallow'>software engineer</span>
            with years of experience engineering exceptional
            <span className='bold'>web experiences,</span> 
            <br />
            passionate about engineering intuitive and dynamic 
            <span className='shallow'>software solutions</span>
        </p>

        <Button
          text="Meet Me" 
          btnType="primary" 
          suffix={"/icons/arrow-right.png"}
          // onClick={() => navigate()}
        />

       
      </main>

      <span className='text-italic-close'>{"</landing page>"}</span>
    </section>
  )
}