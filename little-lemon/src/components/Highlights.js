import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import bruchata from './images/bruchata.jpeg'
import lobstersalad from './images/lobstersalad.jpeg'
import Tiramasu from './images/Tiramasu.jpeg'
import './Highlights.css'



import React,{ Component } from 'react'

export default class Highlights extends Component {
    render() {
        return(
            <div>
                
               <Container className='Article'>
               <h3 style={{textAlign: 'center',paddingTop: '100px', color: 'white'}}>Specials</h3>
               <div style={{float: 'center',paddingBottom: 50, paddingLeft: '500px'}}>
               <Button variant="dark">Online menu</Button>
               <br/>
               </div>
               <CardGroup>
      <Card  border="secondary" style={{marginLeft: '.5rem'}}>
        <Card.Img variant="top" src={lobstersalad } />
        <Card.Body>
          <Card.Title> Aragosta alla Catalana <span>$8.99</span></Card.Title>
          <Card.Text>
          Aragosta alla Catalana is an Italian dish originating from Sardinia. The salad is prepared with lobster, tomatoes, onions, oil, and lemon. Depending on the variations, the dish can also contain potatoes, cherry tomatoes, and capers.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Order a delivery</Button>{' '}
        </Card.Footer>
      </Card>
      
      <Card border="secondary" style={{marginLeft: '.5rem'}}>
        <Card.Img variant="top" src={bruchata} />
        <Card.Body>
          <Card.Title>Bruschetta <span>$12.89</span></Card.Title>
          <Card.Text>
          Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. Variations may include toppings of tomato, vegetables, beans, cured meat, or cheese. In Italy, bruschetta is often prepared using a brustolina grill.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Order a delivery</Button>{' '}
        </Card.Footer>
      </Card>
      <Card border="secondary" style={{marginLeft: '.5rem'}}>
      <Card.Img variant="top" src={Tiramasu } />
        <Card.Body>
          <Card.Title>Tiramisu <span>$6.99</span></Card.Title>
          <Card.Text>
          Tiramisu is a classic Italian no-bake dessert made with layers of coffee-soaked ladyfingers and incredible mascarpone cream..
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Order a delivery</Button>{' '}
        </Card.Footer>
      </Card>
    </CardGroup>
               </Container>
            </div>
        );
    }
}