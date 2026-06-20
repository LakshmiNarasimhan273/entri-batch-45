import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProductLists() {
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);

    // api fetch
    const fetchProducts = async () => {
        try{
            // logic
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        }catch(err){
            // error
            console.log(err);
        }finally{
            // final stage to process our feature
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // ui logic
    if(loading){
        return(
            <h1 className='text-center text-3xl font-semibold mt-10'>Loading Products...</h1>
        )
    }

  return (
    <div className='min-h-screen bg-slate-200 p-8'>
        <h1 className='text-4xl font-bold text-center mb-10'>Shopyfy Products</h1>

        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                products.map(data => (
                    <div className='bg-white rounded-xl shadow-lg overflow-hidden' key={data.id}>
                        <img className='h-56 w-full object-contain p-4' src={data.image} alt="" />

                        <div className='p-5'>
                            <h2 className='font-semibold text-lg line-clamp-2 h-14'>{data.title}</h2>
                            <p className='text-green-600 text-xl font-bold mt-2'>{data.price}</p>

                            <Link className='block bg-black text-white text-center mt-5 py-2 rounded-lg' to={`/product/${data.id}`}>View Details</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductLists