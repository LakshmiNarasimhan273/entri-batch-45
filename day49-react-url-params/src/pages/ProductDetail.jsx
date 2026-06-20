import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <h1 className="text-center text-3xl font-bold mt-10">
        Loading Product...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-10 p-8">
        
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[450px] object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="uppercase text-sm text-gray-500 mb-2">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 leading-7 mb-6">
            {product.description}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-green-600">
              ${product.price}
            </span>

            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              ⭐ {product.rating.rate}
            </span>
          </div>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              Add To Cart
            </button>

            <Link
              to="/"
              className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
              Back
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;