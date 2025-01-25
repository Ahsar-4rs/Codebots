import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'


const Explore = ({category,setCategory}) => {
  return (
    <div className='explor-menu' id='explore-menu'>
      <h1>Explore Our Inventory</h1>
      <p className='explore-menu-text'>Shop Online for men, women and kids fashion, home décor and furnishings, kitchen apppliances, health and sports products at <em>For You</em> and Complete your payment online without having to wait in queue. </p>
        <div className='explore-menu-list' data-speed='slow' data-direction='right'>
            {menu_list.map((item,index)=>{
                return(
                    
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        
                        <a href={item.path}><img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''></img></a>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Explore
