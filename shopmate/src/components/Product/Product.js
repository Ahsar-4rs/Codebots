import React,{useContext} from 'react'
import ProductDescription from '../ProductDescription/ProductDescription'
import Gallery from '../Gallery/Gallery';
import './Product.css'
import { StoreContext } from '../../context/StoreContext';
import { useParams } from 'react-router-dom';

const Product = (props) => {
  const{all_product}=useContext(StoreContext);
  const {productId}=useParams();
  
  const product=all_product.find((e)=>e.id===Number(productId));
  
    return (

      <main className="App">
        
        <section className="hero">
          <Gallery product={product} />
          <ProductDescription setCartCount={props.setCartCount} product={product}/>
        </section>
      </main>
    );
}

export default Product
