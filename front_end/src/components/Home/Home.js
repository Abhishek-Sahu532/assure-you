import React, { Fragment } from 'react'
import {BiMouse} from 'react-icons/bi'
import './Home.css'
import Product from './Product.js'



const product ={
    name:'blue shirt',
    images: [{url: 'https"//i.ibb.co/DRST11n/1.webp'}],
    price: 'R3000',
    _id: 'abishek'

}


const Home = () => {
  return (
    <Fragment>
<div className='banner'>
    <p>Welcome to Ecommerce</p>
    <h1>FIND AMAZING PRODUCTS BELOW</h1>
<a href='#container'>
    <button>Scroll <BiMouse /> </button>
</a>
</div>
<h2 className='homeHeading'>Featured Products</h2>
   
   <div className="container" id='container'>

<Product product={product} />

   </div>
   
   
    </Fragment>
  )
}

export default Home