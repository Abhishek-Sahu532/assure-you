import React, { useEffect } from 'react'
import "./App.css";
import Header from "./components/Header";
import WebFont from "webfontloader";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home.js";
import ProductDetails from "./components/Product/ProductDetails.js";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Product/Products.js";
import Search from "./components/Product/Search.js";
import LoginSingup from "./components/User/LoginSignup.js";
import store from './Store.js'
import { loadUser } from "./actions/userAction.js";
import UserOptions from './components/Home/UserOptions.js'
import { useSelector } from "react-redux";
import Profile from './components/User/Profile.js'
import ProtectedRoute from './components/Route/ProtectedRoute.js';
import UpdateProfile from './components/User/UpdateProfile.js'
import UpdatePassword from './components/User/UpdatePassword.js'
import ForgetPassword from './components/User/ForgetPassword.js'
import ResetPassword from './components/User/ResetPassword.js'


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
        <Route path='/account/*' element={<ProtectedRoute isAuthenticated={isAuthenticated} />} Component={Profile} />
        <Route exact path='/me/update/*' element={<ProtectedRoute isAuthenticated={isAuthenticated} />} Component={UpdateProfile} />

        <Route exact path='/password/update' element={<ProtectedRoute isAuthenticated={isAuthenticated} />} Component={UpdatePassword} />

        <Route exact path='/forget/password' Component={ForgetPassword} />


        <Route exact path='/password/reset/"token' Component={ResetPassword} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
