import React, { useState } from 'react'
import Login from './pages/Login'
import Order from './pages/Order'
import Dashboard from './pages/Dashboard';
import Child from './pages/Child';
import ProductsPage from './pages/ProductsPage';

function App() {

  const [productName, setProductName] = useState("");

  const receiveData = (data) => {
    setProductName(data);
  }

  const user = {
    name: "Narasimhan",
    role: "learner",
    isLogged: false
  };
  console.log(productName)
  return (
    <div>
      {/* <Login />
      <Order /> */}

      {/* <Dashboard userData = {user} /> */}

      <h1>{productName}</h1>
      <Child sendData={receiveData} />

      <ProductsPage />

    </div>
  )
}

export default App