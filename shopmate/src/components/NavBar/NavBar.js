import React,{useState} from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'

const getDefaultMenu=()=>{
  let menu="Home"
  return menu;
 }
const NavBar = (props) => {
  const[menu,setMenu]= useState(() => {
    const savedMenu = localStorage.getItem("menu");
    return savedMenu ? JSON.parse(savedMenu) : getDefaultMenu();
});



  return (
    <div className='navbar'>
                <div className='navbar-left'>
                <img  src={assets.logo} alt='logo' className='logo'/>
            <ul className='navbar-menu'>
                <a href='/'><li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""} >Home</li></a>
                <a href='/groceries'><li onClick={()=>setMenu("Inventory")} className={menu==="Inventory"?"active":""}>Inventory</li></a>
                <a href='#footer'><li onClick={()=>setMenu("Customer Service")} className={menu==="Customer Service"?"active":""}>Customer Service</li></a>
                <a href='#footer'><li onClick={()=>setMenu("About Us")} className={menu==="About Us"?"active":""}>About us</li></a>
            </ul>
            
           
        </div>
        <div className='navbar-right'>
        <a href='/cart'><img src={assets.cart_icon} alt='Add To Cart' className='navbar-cart-icon'/></a>
        
          </div>
        
    </div>
    
  )
}

export default NavBar
