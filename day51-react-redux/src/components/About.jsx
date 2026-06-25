import React from 'react'
import { useSelector } from 'react-redux'

function About() {
    const name = useSelector(data => data.user.username);
  return (
    <div>
        <h1>About Component - I'm {name} i've a 5+ years of experience</h1>
    </div>
  )
}

export default About