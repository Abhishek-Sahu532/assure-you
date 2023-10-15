import { configureStore } from '@reduxjs/toolkit'
import {combineReducers } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer ,productDetailsReducer} from "./reducers/productReducer";


const reducer = combineReducers({
  products: productReducer,
  productDetails : productDetailsReducer
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