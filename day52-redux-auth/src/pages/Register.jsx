import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function Register() {
    const[username, setUsername] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!username.trim()) return;
        dispatch(registerUser(username));
        navigate("/");
    }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className='p-6 max-w-sm'>
            <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border w-full px-3 py-2 w-full mb-3 rounded' type="text" 
            placeholder='Enter your username' />

            <button className='bg-slate-800 w-full text-white px-4 py-2 rounded cursor-pointer'>Register</button>
        </form>
    </div>
  )
}

export default Register