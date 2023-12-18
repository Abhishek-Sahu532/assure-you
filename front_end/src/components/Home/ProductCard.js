import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";



const ProductCard = ({ product }) => {

  const options = {
   
    size: 'large',
    value: product.ratings || 0,
    readOnly: true,
    precision: 0.5
  };
  // const imageUrl = product;
  // console.log(imageUrl)
  // console.log(product.images[0].url);
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt='' />

      {/* <img src={pic} /> */}
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan" >({product.numOfReviews} Reviews) </span>{" "}
      </div>
      <span> {product.price}</span>
    </Link>
  );
};

export default ProductCard;
