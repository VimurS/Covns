import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/landingPage/landingPage';
import Aboutus from "./Pages/aboutus/aboutus";
import Products from './Pages/Products/Products';
import Contact from './Pages/contact/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import brandLogo from "./img/brandlogo.png";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/products' element={<Products />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
