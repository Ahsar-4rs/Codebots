import React, { useContext, useEffect, useState } from 'react'
import './CartItems.css'
import { assets } from '../../assets/assets'
import utils from '../../utils'
import { Link } from 'react-router-dom'
const CartItems = () => {
 
    return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      
       <div>
                      
                        <hr/>
                    </div>
      
      <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>SubTotal</p>
                    <p>{utils.formatCurrency(3456)}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>{utils.formatCurrency(2345)}</h3>
                </div>
            </div>
            
            <a href='/cart'><button  >PROCEED TO CHECKOUT</button></a>
        </div>
        
      </div>
    </div>
  )
}

export default CartItems
