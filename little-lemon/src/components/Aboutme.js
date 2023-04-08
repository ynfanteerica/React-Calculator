import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import building from './images/building.png'
import seats from './images/seats.png'



import React,{ Component } from 'react'

export default class Aboutme extends Component {
   render() {
    return (
        <div>
         <Container className='Article' id='about'>
            <h3 style={{paddingTop: '100px',paddingBottom: '20px', color: 'white'}}>About us</h3>
            <Row>
        <Col> <Card border="dark"  style={{ width:'600px',height: '600px'}}>
            <h1 style={{ textAlign:'left',paddingBottom: '10px'}} >Little Lemon</h1>
            <Card.Body style={{ textAlign:'left'}}>
Our purpose is simple — make people happy! Since 2007, we’ve served food people crave. We are passionate about taking great care of our employees, our guests, and our community. We are obsessed with building a positive, empowering, and supportive culture. We care about every meal and every moment. Walk in the door and you’re in for a great time.  Whether it’s date night, drinks on the town, a big birthday bash, a working lunch, a boozy brunch, or an I-don’t-want-to-cook-tonight night, we’ve got you covered.The menu features bistro classics, seasonal fare, and craft cocktails. We believe in working closely with local farmers and purveyors that we trust to serve consistently delicious food and drinks. We have high standards for every ingredient and we put thought into every bite.</Card.Body>
           </Card></Col>
        <Col> <div className='box' style={{ border: 'black'}}>
           <div className='grid'>
           <img src={building} alt="building" style={{width:'400px', height:'400px'}}/>
           </div>
           <div className='grid1'>
           <img src={seats} alt="seats" style={{width:'400px', height:'400px'}}/>
           </div>
           </div></Col>
      </Row>
            
           
         </Container>
        </div>
    )
   } 
}