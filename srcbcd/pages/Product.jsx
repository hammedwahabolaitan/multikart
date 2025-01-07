import React from "react";
import { useNavigate } from "react-router-dom";
import { availableproducts } from "./api";
import { useEffect } from "react";
import { useState } from "react";

// ProductCard Component
const ProductCard = ({
  imageUrl,
  title,
  price,
  originalPrice,
  colors,
  rating,
}) => {
//   return (
//   );
};

// ProductList Component
// const [products,useProducts] =useState([])
const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function products() {
      const response = await availableproducts();
          if (response.status=="fail"&&response.message=="unauthorize"){

      navigate("/LoginPage")
      
      

    }

      
      setProducts(response.result);
      console.log(response);
    }

    products();
  }, []);

  const goto = (page) => {
    navigate(page);
  };
  const handleNavigate = (id) => {
    navigate(`/singleproduct?id=${id}`); // Redirect to BlogPage with ID
  };
 

  return (
    <div id="product" className="container mx-auto p-4">
      <div className="my-5 text-center">
        <h4 className="text-lg font-semibold">Exclusive Products</h4>
        <h2 className="text-2xl font-bold uppercase">Special Products</h2>
        <div className="my-2 h-[2px] bg-gray-300 w-24 mx-auto"></div>
      </div>

      <ul className="flex gap-4 mb-4 border-b-2 border-gray-300 justify-center">
        <li className="cursor-pointer px-4 py-2 text-blue-500 border-b-2 border-blue-500">
          NEW ARRIVAL
        </li>
        <li
          className="cursor-pointer px-4 py-2 hover:text-blue-500"
          onClick={() => goto("/feature")}
        >
          FEATURED
        </li>
        <li
          className="cursor-pointer px-4 py-2 hover:text-blue-500"
          onClick={() => goto("/special")}
        >
          SPECIAL
        </li>
      </ul>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => goto(`/singleproduct?id=${product.id}`)}
          >
            {/* <h1>{product.itemsName}</h1 > */}
            <div className="w-80 border rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Product Image */}
              <div className="relative">
                <img
                  src="src/assets/img/8.jpg"
                  alt={product.itemsName}
                  className="w-full h-[65vh] object-cover rounded-t-md"
                />
                <div className="absolute bottom-2 left-2 flex space-x-1">
                  
                </div>
              </div>

              {/* Product Details */}
              <div className="text-center mt-4 px-4">
                <div className="flex items-center justify-center space-x-1">
                  
                </div>
                <h2 className="text-lg font-semibold mt-2">{product.itemsName}</h2>
                <div className="text-xl font-bold text-orange-600">
                  ${product.itemsPrice}
                </div>
                <div className="text-sm text-gray-500 line-through">
                </div>

                {/* Color Options */}
                <div className="flex justify-center mt-2 space-x-2">
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;