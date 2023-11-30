import React, { useEffect } from 'react'
import "./App.css";
import Header from "./components/Header";
import WebFont from "webfontloader";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home.js";
import ProductDetails from "./components/Product/ProductDetails.js";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./components/Product/Products.js";
import Search from "./components/Product/Search.js";
import LoginSingup from "./components/User/LoginSignup.js";
import store from './Store.js'
import { loadUser } from "./actions/userAction.js";
import UserOptions from './components/Home/UserOptions.js'
import { useSelector } from "react-redux";
import Profile from './components/User/Profile.js'
// import ProtectedRoute from './components/Route/ProtectedRoute.js';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user)

  console.log('user from useroptions', user, 'isAuthenticated', isAuthenticated)
  useEffect(() => {
    WebFont.load(
      {
        google: {
          families: ["Roboto", "Droid Sans", "Chilanka"],
        },
      });

    store.dispatch(loadUser()) //when user logged in, In the homepage the details of user will load
  }, []);
  return (
    <div className="App">
      <Header />


      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/product/:id" Component={ProductDetails} />
        <Route exact path="/products" Component={Products} />

        <Route path="/products/:keyword" Component={Products} />

        <Route exact path="/search" Component={Search} />
        <Route exact path="/login" Component={LoginSingup} />


        {/* <Route exact path='/'>
          {isAuthenticated ? <Navigate to='/account' /> : <Navigate to='/login' />}
        </Route> */}

{/* <ProtectedRoute exact path='/account' isAuthenticated={isAuthenticated} Component={Profile}/> */}



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
