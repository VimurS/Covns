import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Products.css';
import NavBar from "../navBar/navBar"
import Contact from "../contact/contact"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import milkcard from "../../img/milkcard.jpg";

const Products = () => {
  return (
    <>
<NavBar />

<div className='products'>
<h2 className='OProd'>Our Products</h2>
    <Card className='prodCard' style={{ width: '18rem',boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  }}>
    {/* <Card.Header>Fresh Cow Milk</Card.Header> */}
      <Card.Img variant="top" src={milkcard} />
      <Card.Body>
        <Card.Title className='CardTitle' style={{}}>Fresh Cow Milk</Card.Title>
        <Card.Text className='CardText'>
        Organic A2 Fresh Cow Milk, available to buy in two convenient sizes: 500 ml and 1 liter. Click below!
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body style={{textAlign:"center"}}>
      <button className='btn btn-dark prodBtn' style={{ marginRight:"10px"}}><Card.Link href="#" style={{textDecoration:"none",color:"white", fontWeight:"600"}}>500 ML</Card.Link></button>
      <button className='btn btn-dark prodBtn' ><Card.Link href="#" style={{textDecoration:"none", color:"white", fontWeight:"600"}}>1 Liter</Card.Link></button>
      </Card.Body>
    </Card>
    </div>

    <Contact />
    </>
  );
}

export default Products;