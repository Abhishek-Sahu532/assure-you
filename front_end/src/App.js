import './App.css';
import Header from './components/Header'
import WebFont from 'webfontloader'
import React from 'react';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home.js'
// import Loader from './components/Loader/Loader'
import ProductDetails from './components/Product/ProductDetails.js'
// import { Route, Routes } from 'react-router-dom';

function App() {
  //font will load before the page load
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

      <Home/>
      <ProductDetails />
      {/* <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/product/:id' Component={ProductDetails} />

      </Routes> */}
      <Footer />
    </div>

    //     <Router>

    // 
    // {/* <Home /> */}
    // {/* <Switch>  */}
    //   {/* MADE SOME CHANGES DUE TO DEGREADE THE REACT AND REACT-DOM */}

    // {/* </Switch> */}
    // 

    //     </Router>
  );
}

export default App;
