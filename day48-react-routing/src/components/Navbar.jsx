import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='bg-black text-white px-6 py-3'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <h1 className='text-xl font-bold'>Entri</h1>

                <div className='flex gap-6'>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/orders">My Orders</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar