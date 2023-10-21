import React, { Fragment, useEffect } from "react";
import { BiMouse } from "react-icons/bi";
import "./Home.css";
import Product from "./Product.js";
import { Metadata } from "../Metadata";
import { getProduct } from '../../actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader';
import { useAlert } from "react-alert";


const Home = () => {
const alert = useAlert();

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(state => state.products)



  useEffect(() => {
    if(error){
      return alert.error(error)
    }
    dispatch(getProduct())
  }, [dispatch, error, alert])
 
  return (
<Fragment>
  {
    loading ? (
      <Loader />
    ) : (
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
        {products && products.map((product) => (
          <Product product={product} key={product.name} />
        ))}

      </div>
    </Fragment>
    )
  }
</Fragment>

    
  );
};

export default Home;
