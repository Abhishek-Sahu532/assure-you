import { configureStore } from '@reduxjs/toolkit'
import {combineReducers } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer ,productDetailsReducer} from "./reducers/productReducer";
import {profileReducer, userReducer, forgetPasswordReducer} from './reducers/userReducer'

const reducer = combineReducers({
  products: productReducer,
  productDetails : productDetailsReducer,
  user: userReducer,
  profile : profileReducer,
  forgetPassword: forgetPasswordReducer,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore ({


  reducer,
   initialState, // Use `preloadedState` instead of `initialState`
  middleware: [...middleware],
  // enhancers: [composeWithDevTools()] 
});


export default store;