import "./App.css";
import Header from "./components/Header";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home.js";
import ProductDetails from "./components/Product/ProductDetails.js";
import { Route, Routes } from "react-router-dom";
import Products from './components/Product/Products.js'
import Search from './components/Product/Search.js'

function App() {
  React.useEffect(() => {
    WebFont.load(
      {
        google: {
          families: ["Roboto", "Droid Sans", "Chilanka"],
        },
      },
      []
    );
  });
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/product/:id" Component={ProductDetails} />
        <Route exact path='/products' Component={Products} />
        <Route exact path='/search' Component={Search} />
     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
