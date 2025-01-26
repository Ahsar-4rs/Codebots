import React, { useContext, useEffect, useState } from 'react'
import './CartItems.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import utils from '../../utils'
import { Link } from 'react-router-dom'
import QRCode from 'react-qr-code'
import CsvDownloadButton from 'react-json-to-csv'

const jsonToCsv = (json) => {
  const csvRows = Object.entries(json).map(([key, value]) => `${key}:${value}`);
    return csvRows.join(',');
}

const CartItems = () => {
  const {total,checkout,getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(StoreContext);
    const csvData = jsonToCsv(cartItems);
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
      {all_product.map((item)=>{
        
        if(cartItems[item.id]>0)
        {
            return( <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={item.image} alt='' className='carticon-product-icon'/>
                            <p>{item.name}</p>
                            <p>{utils.formatCurrency(item.new_price)}</p>
                            <button className='cartItems-quantity'>{cartItems[item.id]}</button>
                            <p>{utils.formatCurrency(item.new_price*cartItems[item.id])}</p>
                            <img src={assets.deletes} onClick={()=>removeFromCart(item.id)} alt='' className='cartitems-remove-icon'/>
                        
                        </div>
                        <hr/>
                    </div>)
        }
        
        return null;
      })}

      <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>SubTotal</p>
                    <p>{utils.formatCurrency(getTotalCartAmount())}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>{utils.formatCurrency(getTotalCartAmount())}</h3>
                </div>
            </div>
            <QRCode 
            size={200}
            bgColor='white'
            fgColor='black'
            value={csvData}
            />
            <a href='/cart'><button onClick={()=>{checkout()}} >PROCEED TO CHECKOUT</button></a>
        </div>
        
      </div>
    </div>
  )
}

export default CartItems
