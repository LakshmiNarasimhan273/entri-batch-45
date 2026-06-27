import React from 'react'
import { useSelector } from 'react-redux'

function About() {
  const name = useSelector(data => data.auth.username)
  return (
    <div className='p-6 text-3xl'>Hi I'm {name}, having an 5+ years of experience in Web Frameworks</div>
  )
}

export default About