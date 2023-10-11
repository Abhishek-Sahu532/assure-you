import React, { Fragment } from "react";
import { BiMouse } from "react-icons/bi";
import "./Home.css";
import Product from "./Product.js";
import pic from "../../assets/images/top1.jpg";
import { Metadata } from "../Metadata";



const product = {
  name: "blue shirt",
  images: pic,
  price: "R3000",
  _id: "abishek",
};

const Home = () => {
  return (
    <Fragment>
      <Metadata title='ECOMMERCE' />
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <BiMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
