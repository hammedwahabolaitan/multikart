import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartlist } from '../pages/api';
import { payment } from '../pages/api';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const customerid = 1; // Replace with dynamic customer ID as needed
async function checkout() {
  const customerid =localStorage.getItem("customerid")
  const response = await payment(customerid,total)
  console.log(response);
  
  if (response.data.status=="success"){

  localStorage.setItem("payment_url",response.data.payment_url)
  
  localStorage.setItem('total_price',total)
  navigate("/checkout")
  }


  console.log(response);
  // alert(checkout)
  
}

  useEffect(() => {
    async function fetchCart() {
      const customerid = localStorage.getItem('customerid');
      const response = await cartlist(customerid);
      setCart(response.result || []); // Handle null or undefined results
    }

    fetchCart();
  }, []);

  // Calculate total price whenever the cart changes
  useEffect(() => {
    
    const calculatedTotal = cart.reduce((sum, item) => sum + item.itemsPrice, 0);
    setTotal(calculatedTotal);
  }, [cart]);

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Cart</h2>
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2">
              <li><a href="/" className="text-blue-500">Home</a></li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-700">Cart</li>
            </ol>
          </nav>
        </div>

        {/* Cart Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4">
                    <img src="src/assets/img/3(2).jpg" className="w-16 h-16 object-cover" />
                  </td>
                  <td className="p-4">
                    <a href={`/left-sidebar/product/${item.id}`} className="text-blue-500 hover:underline">
                      {item.itemsName}
                    </a>
                    {item.outOfStock && (
                      <p className="text-red-500 text-sm">Out of Stock</p>
                    )}
                  </td>
                  <td className="p-4">${item.itemsPrice.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Price */}
        <div className="flex justify-end mt-6">
          <div className="text-lg font-bold">Total Price: ${total.toFixed(2)}</div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            onClick={() => navigate('/product')}
          >
            Continue Shopping
          </button>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            onClick={checkout}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
