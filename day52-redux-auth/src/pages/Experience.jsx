import React from 'react'
import { useSelector } from 'react-redux'

function Experience() {
  const name = useSelector(data => data.auth.username);
  return (
    <div className='p-6 text-3xl'>Experiences in Web Frameworks, Web Application, check out my user profile {name}</div>
  )
}

export default Experience