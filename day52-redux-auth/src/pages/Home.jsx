import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const name = useSelector(data => data.auth.username);
  return (
    <div> 
    {
      name ? (
        <h1 className='p-6 text-3xl'>Welcome {name}</h1>
      ) : (
        <span className='text-center mt-6 text-gray-600'>No user found</span>
      )
    }
    </div>
  )
  
}

export default Home