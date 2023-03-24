import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { Button } from '.'

type Props = {}


export const LandingPage = (props: Props) => {

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

        <p className='landing_summary' id="bg-screen" >
            A creative 
            <span className='bold'>software engineer</span>
            with years of experience engineering exceptional
            <span className='bold'>web experiences,</span> 
            <br />
            passionate about engineering intuitive and dynamic 
            <span className='bold'>software solutions</span>
        </p>
        <p className='landing_summary' id="sm-screen">
            A creative 
            <span className='bold'>software engineer</span>
            with years of experience engineering exceptional
            <span className='bold'>web experiences,</span> 
            passionate about engineering intuitive and dynamic 
            <span className='bold'>software solutions</span>
        </p>

        <Button
          text="Download Resume" 
          btnType="primary" 
          // suffix={"/icons/arrow-right.png"}
          // onClick={() => navigate()}
        />

       
      </main>

      <span className='text-italic-close'>{"</landing page>"}</span>
    </section>
  )
}