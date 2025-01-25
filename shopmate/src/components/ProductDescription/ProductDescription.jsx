import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import utils from "../../utils";
import { StoreContext } from "../../context/StoreContext";

const ProductDescription = (props) => {
  const { product } = props;
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(StoreContext);

  // Check if product exists
  if (!product) {
    return <p>Product not found</p>; // Fallback content
  }

  // Adds number of items to cart (plus 1)
  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Subtracts number from total to be added to cart (minus 1)
  const handleSubstract = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Handles number input
  const handleInputChange = (e) => {
    setCount(Math.max(0, e.target.value)); // Prevent negative values
  };

  // Pushes items to cart/basket
  return (
    <div className="details-wrapper">
      <h1 className="details-product-name">{product.name}</h1>
      <p className="details-description">{product.info}</p>

      <div className="price">
        <h2 className="price-new">
          {utils.formatCurrency(product.new_price)} <span className="discount">{product.discount}</span>
        </h2>
        <p className="price-old">{utils.formatCurrency(product.price)}</p>
      </div>

      <div className="buy">
        <div className="quantity-btns">
          <button className="minus-btn" onClick={handleSubstract}>
            <img src={assets.minus} alt="minus" width='30px' height='30px' />
          </button>
          <input
            type="number"
            name="number"
            value={count}
            id="number"
            onChange={handleInputChange}
            min="0"
          />
          <button className="plus-btn" onClick={handleAdd}>
            <img src={assets.plus} alt="plus" width='30px' height='30px' />
          </button>
        </div>
        <button className="add-to-cart" onClick={() => { addToCart(product.id, count); }}>
          <img src={assets.cart_icon} alt="add to cart" width='40px' height='40px' />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
