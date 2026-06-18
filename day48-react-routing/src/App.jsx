import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Orders from './pages/Orders'

import { BrowserRouter, Routes, Route } from "react-router-dom";
// BrowserRouter - It enables a major configuration to browser
// Routes - parent component for routing
// Route - individual component route
function App() {
  return (
    <div>
      {/* Routing Syntax */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* "/" - base url means a home page */}
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;