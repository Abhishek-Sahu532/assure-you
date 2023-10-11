import React from 'react'
import {Link} from 'react-router-dom';
import ReactStarts from 'react-rating-stars-component'



const options={
    edit:false,
    color:'rgba(20,20,20,0.1)',
    activeColor: 'tomato',
    size: window.innerWidth < 600 ? 20 : 25,
    value:2.5,
    isHalf:true

}

const Product = ({product}) => {
  return (
   <Link className='productCard' to={product._id}>
   <img src={product.images} alt='' />
   <p>{product.name}</p>
<div><ReactStarts {...options}  /> <span>(256 Reviews) </span> </div>

   </Link>
  )
}

export default Product