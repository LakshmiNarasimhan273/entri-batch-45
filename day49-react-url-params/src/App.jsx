import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductLists from './pages/ProductLists';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductLists />} />
          {/* url params = /:id */}
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;