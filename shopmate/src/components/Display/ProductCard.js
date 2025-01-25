import React from 'react';
import './ProductCard.css'
import utils from '../../utils'


function ProductCard(props) {
    
    return (
       <div className="row product">
                           <div className="col-md-4 car" key = {props.product.id}>
                            
                               <figure className="card card-product">
                               
                                   <div className="img-wrap"><img src={`${props.product.image}`} loading="lazy" alt={props.product.name}/></div>
                                   <figcaption className="info-wrap">
                                           <h4 className="title">{props.product.name}</h4>
                                           
                                   </figcaption>
                                   
                                   <div className="bottom-wrap">
                                       <div className="price-wrap">
                                           <div className="price-new"><p>{utils.formatCurrency(props.product.new_price)} {props.product.unit}</p></div> 
                                            <div className='price-old'><p>{utils.formatCurrency(props.product.price)}</p></div>
                                       </div> 
                                       <div className='product-rating'>
                                        <p>Rating: {props.product.rating}</p>
                                       </div>

                                   </div> 
                               </figure>
                           </div> 
       </div>
    )
}

export default ProductCard;
