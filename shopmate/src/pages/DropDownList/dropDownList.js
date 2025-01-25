import React from 'react'; // Importing Modules
import { menu_list } from '../../assets/assets';
import "./dropDownList.css"



// Creating a function to track the changes in DropDown List
function DropdownList(props) { 


return (
  <div className='filter'>
    
 <ul  className='category'>
 
            {menu_list.map((item,index)=>{
              return(
                <a href={item.path}><li key={index} >{item.menu_name}</li></a>
              )
            })}
          
 
 </ul>
 </div>
 );
}
export default DropdownList;