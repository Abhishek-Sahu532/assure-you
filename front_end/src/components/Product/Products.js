import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../Loader/Loader";
import ProductCard from "../Home/ProductCard";

const Products = () => {
const dispatch = useDispatch();

const {products, loading, error, productsCount} = useSelector((state)=>state.products); 

useEffect(()=>{
dispatch(getProduct())
},[dispatch])

  return <Fragment>{loading ? <Loader /> : 
   <Fragment>
  <h2 className="productHeading">Products</h2>  
    <div className="products">
        {products && products.map((product)=>(
            <ProductCard  product={product} key={product.id} />
        ))}
    </div>
    </Fragment>}</Fragment>;
};

export default Products;
