import React from 'react';
import ReactDOM from 'react-dom/client';
import './navBar.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import brandLogo from "../../img/brandlogo.png";
import brandLogoTam from "../../img/brandlogotam.png";
import Contact from "../contact/contact"
import { Link } from 'react-router-dom';


const NavBar = () => {

  const [currentImg, setCurrentImg] = useState(brandLogo);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImg((prevImg) => {
        if (prevImg === brandLogo) {
          return brandLogoTam;
        } else {
          return brandLogo;
        }
      });
    }, 15000);

    return () => clearInterval(imgInterval);
  }, []);

  return (
    <>

      <div className='navBar' >
        <Navbar expand="lg" className="" style={{ margin: "0px", padding: "0px 20px 0px 20px", backgroundColor: "#00bf63" }}>
          <Container fluid style={{ padding: "10px 0px 10px 0px", margin: "0px" }}>
            <Navbar.Brand href="#home" style={{ padding: "0px" }}><img className='brandLogo' src={currentImg} alt='brandlogo'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0" }}>
              <Nav className="me-auto">
                <Nav.Link className='navLinks' href="/Covns/home">Home</Nav.Link>
                <Nav.Link className='navLinks' href="#link">Products</Nav.Link>
                <NavDropdown className='navLinks' title="Delivery Locations" id="basic-nav-dropdown">
                  {/* <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Milk
                  </NavDropdown.Item> */}
                  <NavDropdown.Item className='dropdownNav' href="#action/3.3">R.S.Puram</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Poo Market</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Gandhipark</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Telugu Street</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Sullivan Street</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Raja Street</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">R.G. Street</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Sukrawarpet</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Ponnaiya Raja Puram</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Chokkampudur</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Shivalaya</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Chetty Street</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Selvapuram</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">TelunguPalayam</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='dropdownNav' href="#action/3.4">Perur</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='navLinks' href="/Covns/aboutus">About US</Nav.Link>
                <Nav.Link className='navLinks' href="#contactus">Contact US</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}



export default NavBar;