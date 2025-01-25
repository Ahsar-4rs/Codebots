import React,{useContext} from 'react'
import './ShopCategory.css'
import { StoreContext } from '../../context/StoreContext'
import DropdownList from '../../components/DropDownList/dropDownList.js'
import { all_products, assets } from '../../assets/assets';
import ProductCard from '../../components/Display/ProductCard';
import { Link } from 'react-router-dom';

const ShopCategory = (props) => {
    const{all_product}=useContext(StoreContext);
    
    
  return (
    <div className='shop-category'>
      <div className='banner'>
      <img src={assets.banner}  alt=''/>
      </div>
      <h1>Shop Here</h1>
      <div className='shopcategory-indexSort'>
        <p>
            <span>Showing 30 products</span> out of {all_product.length} products
        </p>
        <br/>
        <div className='shopcategory-sort'>
            <DropdownList category={props.category}/>
        </div>
        
      </div>
      <div className='shopcategory-products'>
          {all_product.map((item,i)=>{
            
            if(props.category===item.category){
              
              return (
                
                <Link to={`/product/${item.id}`} key={i}>
              <ProductCard product={item} key={i} />
              </Link>
              )

            }
            else
            {
              return null;
            }
          })}

      </div>
    </div>
  )
}

export default ShopCategory
