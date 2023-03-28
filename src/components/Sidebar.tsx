import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'

interface Props {
  toggleSider: () => void
}

export const Sidebar = ({toggleSider}: Props) => {
  const navigate = useNavigate()

  return (
    <aside className='sidebar bg-secondary'>
      <p className='text-secondary'
        onClick={() => {
          navigate("/")
          toggleSider()
        }}
      >
        Home
      </p>
      <p className='text-secondary'
        onClick={() => {
          navigate("/projects")
          toggleSider()
        }}
      >
        Projects
      </p>

      <a href="https://docs.google.com/document/d/1mrQ3gzTim5bE1uYS7SZ3xA-izz9-gX3VhZ0yxQSlyjc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" 
        className='download-btn'
      >
        <Button
          text="Resume"
          btnType='primary'
          className='sidebar-btn'
        />
      </a>
    </aside>
  )
}