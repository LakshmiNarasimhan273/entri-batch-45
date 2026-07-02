import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProductsPage() {
    const[products, setProducts] = useState([]);

    // component life cycle method (CLC)
    // mount, update, unmount
    // useEffect

    useEffect(() => {  // mount
        fetchProducts(); // update
    }, []); // unmount

    const fetchProducts = async () => {
        try{
            const response = await axios.get("https://fakestoreapi.com/products")
            setProducts(response.data);
        }catch(err){
            console.log(err);            
        }
    }

    console.log(products)

  return (
    <div>
        {
            products.map(data => (
                <div key={data.id}>
                    <h1 className='text-green-700'>{data.title}</h1>
                    <p>{data.price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ProductsPage