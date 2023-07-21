import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/landingPage/landingPage'
import Aboutus from "./Pages/aboutus/aboutus"
import Contact from './Pages/contact/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import brandLogo from "./img/brandlogo.png";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path='/Covns' element={<LandingPage />}></Route>
        <Route path='/home' element={<LandingPage />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
      </Routes>

    </HashRouter>

  );
}

export default App;
