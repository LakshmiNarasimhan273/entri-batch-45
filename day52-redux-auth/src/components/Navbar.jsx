import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

function Navbar() {
  const name = useSelector(data => data.auth.username);
  console.log(name);
  return (
    <nav className='bg-slate-800 p-4 text-white flex gap-4'>

      {
        name ? (
          <div className='flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <span>{name}</span>
          </div>
        ) : (
          <Link to="/register">Register</Link>
        )
      }
    </nav>
  )
}

export default Navbar