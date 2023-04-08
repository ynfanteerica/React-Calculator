import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import lemon from './images/lemon.jpeg'





import React,{ Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Container className='Article' style={{paddingTop: '100px',paddingBottom: '20px'}}>
                <Row md={4}>
        <Col>  <img src={lemon} alt="logo" style={{width:'200', height:'100px', borderStyle: 'solid',}}/></Col>
        <Col xs={6}>  <Card border="dark" style={{ width: '18rem' }}>
      <Card.Body>  
        <Card.Title style={{textDecorationLine: ' underline overline'}}>Navigation</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
            <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#reservation">Reservation</Nav.Link>
            <Nav.Link href="#orderonline">Order Online</Nav.Link>
            <Nav.Link href="#loginin">Log in</Nav.Link>
         </Nav>
        </Card.Text>
      
      </Card.Body>
    </Card></Col>
        <Col>  <Card border="dark" style={{ width: '18rem',backgroundColor:'' }}>
      <Card.Body style={{paddingLeft: '10px'}}>
        <Card.Title style={{textDecorationLine: ' underline overline'}}>Contact</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        <Card.Link href="#">Address</Card.Link>
        <Card.Link href="#">phone number</Card.Link>
        <Card.Link href="#">email</Card.Link>
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
        <Col>  <Card border="dark" style={{ width: '18rem' }}>
      <Card.Body style={{paddingLeft: '10px'}}>
        <Card.Title style={{textDecorationLine: ' underline overline'}}>Social Media links</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        <Card.Link href="#">Address</Card.Link>
        <Card.Link href="#">phone number</Card.Link>
        <Card.Link href="#">email</Card.Link>
        </Card.Text>
      
      </Card.Body>
    </Card></Col>
      </Row>
                </Container>

            </div>
        );
    }
}