import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import lemon from './images/lemon.jpeg'


import React,{ Component } from 'react'


 export default class NavbarComp extends Component {
    render() {
        return (
            <div>
<>
      
      <Navbar bg="primary" variant="dark">
        <Container>
        <img src={lemon} alt="logo" style={{width:50, marginTop: -7,  borderStyle: 'solid',paddingRight:'10px'}} />
        <br/>
          <Navbar.Brand href="#home">Little lemon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#Reservation">Reservation</Nav.Link>
            <Nav.Link href="#ordersonline">Orders Online</Nav.Link>
            <Nav.Link href="#login">Log in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
    
    </>
            </div> 
        )
       
    }
 }

