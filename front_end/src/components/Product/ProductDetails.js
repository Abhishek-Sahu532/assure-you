import React, {Fragment, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel';
// import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetails} from '../../actions/productAction' ;


const ProductDetails = () => {
    // const {id} = useParams()
    // console.log('id', id)
  const dispatch = useDispatch();

const {product} = useSelector((state)=> state.productDetails);
console.log(product)
  useEffect(()=>{
    // if (id) {
      dispatch(getProductDetails(id));
    // }


  },[dispatch])
  
  return (
 <Fragment>
    <div  className="ProductDetails">
<Carousel>
  {
    product.images && product.images.map((item , i )=>(
      <img className='CarouselImage' key={item.url} src={item} alt={`${i} Slide`} />
    ))
  }
</Carousel>
    </div>
 </Fragment>
  )
}

export default ProductDetails