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
          <span>Holla 👋, I'm</span> 
          <span className='landing_name'>Muhyideen</span>,
        </p>

        <p className='landing_summary'  >
            A creative software engineer building 
            <br />
            exceptional web experiences.
        </p>

        <Button
          text="Download Resume" 
          btnType="primary" 
          className='landing_btn'
        />
      </main>

      <span className='text-italic-close'>{"</landing page>"}</span>
    </section>
  )
}