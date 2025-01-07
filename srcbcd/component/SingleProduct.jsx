
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProductList from '../pages/ProductCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { singleproduct } from '../pages/api';
import { useLocation } from 'react-router-dom';
import axios from 'axios';



const urlBase ="http://localhost:5050"

const SingleProduct = ({ addToCart }) => {
  // const { productId } = useParams();
  const location = useLocation()
  const query = new  URLSearchParams(location.search);
  const productId = query.get('id')
  const customerid =localStorage.getItem("customerid")
 


 async function additems() {

    const response= await axios.post(`${urlBase}/add-cart`,{customerID:customerid, productID:productId,itemQuantity:1})
    console.log(response);
    

    
  }

  console.log(customerid);
  
// const prodct 
const goto = (page) => {
  navigate(page);
};
// const navigate = useNavigate();
const [products, setProducts] = useState([]);

useEffect(() => {
  console.log(productId);
  
  async function products() {
    const response = await singleproduct(productId);

    setProducts(response.result[0]);
    console.log(response.result[0]);
  }

  products();
}, []);

 

  

  return (
    <div className="container mx-auto p-4">
      <img src="../src/assets/img/8.jpg"  className='w-72 h-96' alt="" />
      <h2 className="text-2xl font-bold">{products.itemsName}</h2>
      {/* <p className="line-through text-gray-500">${products.originalPrice}</p> */}
      <p className="text-xl text-green-500">${products.itemsPrice}</p>
      <div className="flex space-x-2 mt-4">
        {/* {products.colors.map((color, index) => (
          <span
            key={index}
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: color }}
          ></span>
        ))} */}
      </div>
      <button
        onClick={() => {
          // addToCart();
          additems();
          toast.success(`${products.itemsName} added to cart!`);
        }}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
      {/* <p className="mt-4">{products.description}</p> */}
    </div>
  );
};
export default SingleProduct;