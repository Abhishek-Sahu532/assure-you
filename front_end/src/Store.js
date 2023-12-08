import { configureStore } from '@reduxjs/toolkit'
import {combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer ,productDetailsReducer} from "./reducers/productReducer";
import {profileReducer, userReducer, forgetPasswordReducer} from './reducers/userReducer'
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
  products: productReducer,
  productDetails : productDetailsReducer,
  user: userReducer,
  profile : profileReducer,
  forgetPassword: forgetPasswordReducer,
  cart: cartReducer,

});

const initialState = {
  cart : {
    cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    shippingInfo : localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {}
  }
};

console.log('initialstate', initialState)

const middleware = [thunk];

const store = configureStore ({
  reducer,
   initialState, 
  middleware: [...middleware],
});


export default store;