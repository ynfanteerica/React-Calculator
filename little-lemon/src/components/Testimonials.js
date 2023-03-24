import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

import happy1 from './images/happy1.png'
import happy2 from './images/client.png'
import happy3 from './images/customer.png'
import star from './images/star.png'





import React,{ Component } from 'react'

export default class Testimonial extends Component {
  render() {
return (
    <div>
        
<Container className='Article'>
    <h3 style={{paddingTop: '100px',paddingBottom: '20px',color: 'white'}}>Testimonials</h3>

    <Row>
        <Col><Card style={{ width: '18rem' }} className= 'Section'>
      <Card.Img variant="top" src={happy1} style={{ width: '200px', height: '200px' }}  />
      <Card.Body>
        <row>
        <Card.Title>Rating <span>5</span> <img src={star} alt="star" style={{width:'20px', height: '20px'}} 
        /></Card.Title>
        </row>
        <Card.Text>
        My husband and I, vacationing in Ny from Chicago, had lunch Fri 17th at TFG and  Your wait staff was so pleasant and helpfull. Your menu is classic French executed authentically. Do not change a thing!! You are spot on!
        </Card.Text>
      
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }} className= 'Section'>
      <Card.Img variant="top" src={happy3} style={{ width: '200px', height: '200px' }}/>
      <Card.Body>
        <Card.Title>Rating <span>4.5</span><img src={star} alt="star" style={{width:'20px', height: '20px'}} 
        /></Card.Title>
        <Card.Text>
        Michel,
Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment. My husband was very impressed and we can’t wait for our parents to come visit so that we can share our new favorite place with them.
J.M.
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }} className= 'Section'>
      <Card.Img variant="top" src={happy2}  style={{ width: '200px', height: '200px' }}/>
      <Card.Body>
        <Card.Title>Rating <span>5.5</span><img src={star} alt="star" style={{width:'20px', height: '20px'}} 
        /></Card.Title>
        <Card.Text>
        We were at The little lemon  a few weeks ago with some clients from Texas . I am finally getting back to tell you that we had a wonderful evening! The food, the service, the host, EVERYTHING was perfect! Thank you again for making TFG such a special place to be.
We hope to see you again soon. Keep up the good work !
T&D
        </Card.Text>
        
       
       
        
      </Card.Body>
    </Card></Col>
      </Row>
</Container>
    </div>
);
  }  
}