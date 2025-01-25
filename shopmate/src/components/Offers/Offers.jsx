import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import ProductCard from '../Display/ProductCard'
import './Offers.css'
import { StoreContext } from '../../context/StoreContext'
const Offers = () => {
  const{all_product}=useContext(StoreContext);
  return (
    <div className='offers'>
        <h1>Latest Deals</h1>
        <div className='offer-items'>
      {all_product.map((item,i)=>{
        if((Number(item.price)-Number(item.new_price))>100)
        {
            return (
                
                <Link to={`/product/${item.id}`} key={i}>
              <ProductCard product={item} key={i}/>
              </Link>
              )
        }
        else{
          return null
        }
      })}
      </div>
    </div>
  )
}

export default Offers
