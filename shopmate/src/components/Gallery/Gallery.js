import React from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { assets } from "../../assets/assets";

const Gallery = (props) => {
  const { product } = props;

  // Check if product exists and has an image property
  if (!product || !product.image) {
    return <p>No image available</p>; // Fallback content
  }

  return (
    <div className="gallery">
      <div className="img-wrapper">
        <div className="main-img">
          <img src={product.image} alt="shoes" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;