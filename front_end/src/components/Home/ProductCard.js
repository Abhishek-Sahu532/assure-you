import React from "react";
import { Link } from "react-router-dom";
import ReactStarts from "react-rating-stars-component";
import pic from "../../assets/images/1.jpg";

const ProductCard = ({ product }) => {

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };
  // const imageUrl = product;
  // console.log(imageUrl)
  // console.log(product.images[0].url);
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />

      {/* <img src={pic} /> */}
      <p>{product.name}</p>
      <div>
        <ReactStarts {...options} />{" "}
        <span>({product.numOfReviews} Reviews) </span>{" "}
      </div>
      <span> {product.price}</span>
    </Link>
  );
};

export default ProductCard;
