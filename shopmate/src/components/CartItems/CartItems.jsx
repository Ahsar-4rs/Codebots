import React, { useContext, useEffect, useState } from 'react'
import './CartItems.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import utils from '../../utils'
import { Link } from 'react-router-dom'
const CartItems = () => {
    const {total,checkout,getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(StoreContext);
    const [loan,setLoan]=useState({
      username:"",
      Amount:0
    })
    const [payment,setPayment]=useState("notLoan");
    const getLoan = async () => {
      const token = localStorage.getItem('auth-token');
    console.log("Fetching loan with token:", token); // Debug log
      try {
          const response = await fetch('http://localhost:3000/getloan', {
              method: 'GET',
              headers: {
                  'auth-token': `${localStorage.getItem('auth-token')}`,
                  'Content-Type': 'application/json'
              }
          });
  
          const data = await response.json();
          if (data.success) {
              console.log("Loan Data:", data.loan);
              // Set the loan state
              setLoan({
                  username: data.loan.username,
                  Amount: data.loan.Amount
              });
          } else {
              // Only alert if the response indicates failure
              if (data.message) {
                  alert(data.message);  // Display the error message from the server
              }
          }
      } catch (error) {
          console.error("Error fetching loan:", error);
          alert("An error occurred while fetching the loan");
      }
  };

  useEffect(() => {
      // Fetch the loan data when the component mounts
      getLoan();
  }, []);

  const removeloan=async()=>{
    console.log("loan removed",loan);
    
    fetch('http://localhost:3000/removeloan',{
        method:'PUT',
        headers:{
            Accept:'application/json',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json'
        },
        body:JSON.stringify(loan),
    }).then((res)=>res.json()).then((data)=>alert(data.message));
}

const changeHandler=(checkbox)=>{
  if(checkbox.checked){
    setPayment("Loan");
    
  }
  else{
    setPayment("notLoan")
  }
}
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
            <div className='loan-option'>
              <input type='checkbox' id='Checkbox' onChange={(e) => {
        loan.Amount = getTotalCartAmount(); 
        changeHandler(e.target); // Pass the checkbox element
        console.log(payment);}}/><label>Click Here To Use Loan Options</label>
            </div>
            <a href='/cart'><button onClick={()=>{checkout();const x=payment==="Loan"?removeloan():false}} >PROCEED TO CHECKOUT</button></a>
        </div>
        
      </div>
    </div>
  )
}

export default CartItems
