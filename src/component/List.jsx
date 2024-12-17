import React from 'react'
import DashboardPage from '../component/DashBoard'
import Cart from '../component/Cart'
import Checkout from '../component/CheckOut'
import OrderSucess from '../component/OrderSuccess'

export default function List() {
  return (
    <div>
      <Checkout />
      <OrderSucess />
      <Cart />
        <DashboardPage />
      
    </div>
  )
}
