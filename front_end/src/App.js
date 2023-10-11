import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import WebFont from 'webfontloader'
import React from 'react';
import Footer from './components/Footer'
import Home from './components/Home/Home.js'

function App() {
//font will load before the page load
  React.useEffect(()=>{
WebFont.load({
  google:{
    families:['Roboto','Droid Sans','Chilanka']
  },
},[])
  })
  return (
    <Router>
      
<Header />
<Routes>
<Route exact path='/' Component={Home} />

</Routes>

<Footer/>

    </Router>
  );
}

export default App;
