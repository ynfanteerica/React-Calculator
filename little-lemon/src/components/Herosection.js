import './Herosection.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

import foodlemon from './images/foodlemon.jpeg'

import React,{ Component } from 'react'

export default class Herosection extends Component {
    render() {
        return (
            <div className='Section'>
                <div className='container1'>
            <Container style={{width:500}}>
                <h3 >Little lemon</h3>
                <h5>New York</h5>
                <br/>
                <p>Little  Lemon is a italian chain that operates across New York City. In nearly every sentence, the headline and description on its homepage stress that it is authentic italian food— not some cheap West Coast imitation. When your restaurant has a well-defined value prop like this, the description is no place for subtlety; you want to hammer it clearly, concisely and continuously. Baba's does this with text and then validates it with loud, in-your-face, food photography.</p>
                <Button variant="success">Reserve a table</Button>{' '}
            </Container>
            </div>
            <div className='pic'>
            <img src={foodlemon} alt="food" style={{width:500}}/>
            </div>
            </div> 
            );
           
        }
    }