import React,{useContext, useState} from "react";
import './SideBar.css'
import { assets, menu_list } from "../../assets/assets";
import DropdownList from "../DropDownList/dropDownList";
import { useUser } from "../../context/UserContext";
import user_icon from '../../assets/user_icon.png'

export const person={name:'Rasha Ameena',username:'Sushi190',email:'sushi2@gmail.com',image:assets.sushi,phno:"98756 76895",joinDate:"02/26",address:"Erankulam"}

const SideBar = props => {
  
  const { userData } = useUser();
  console.log(userData);
  

  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const[choose,setChoose]=useState("")
  const know=()=>{
    alert(choose)
  }
  
  return (
    <div className={sidebarClass}>
      {localStorage.getItem('auth-token')?
      <div className="Profile ">
        <img src={user_icon} alt="" className="profile_pic" />
        <h4>{userData ? userData.username : 'Guest'}</h4>
          <p>{userData ? userData.email : ''}</p>
        </div>:<div></div>}
      <ul className="options">
        
      
        <a href="/" ><li onClick={()=>setChoose("Home")} >Home</li></a>
        <a href="/groceries" ><li onClick={()=>setChoose("Inventory")} >
          Inventory
        </li></a>
        
        <a href="/cart"><li onClick={()=>setChoose("Your Orders")} >Your Orders</li></a>
        {localStorage.getItem('auth-token')?
        <a href="/loandetails"><li onClick={()=>setChoose("Loan Details")}>Loan Details</li></a>:<div></div>}
        
        
      </ul>
      
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        <img src={assets.ver_tab} alt="" />
      </button>
      
    </div>
    
  );
  
};
export default SideBar;




