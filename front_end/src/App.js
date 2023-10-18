import './App.css';
import Header from './components/Header'
import WebFont from 'webfontloader'
import React from 'react';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home.js'
import ProductDetails from './components/Product/ProductDetails.js'
import { Route, Routes } from 'react-router-dom';

function App() {
 
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka']
      },
    }, [])
  })
  return (


    <div className='App'>
      <Header />

   
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/product/:id' Component={ProductDetails} />

      // </Routes>
      <Footer />
    </div>
  );
}

export default App;
