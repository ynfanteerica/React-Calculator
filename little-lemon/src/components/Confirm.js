import Container from 'react-bootstrap/Container';
import { Component } from 'react';

import Card from 'react-bootstrap/Card';


//import {Link}from "react-router-dom";

const guest = [{
  guestnumber: ""
}];
const optionN = [{
  option: ""
}];
const typeO = [{
  type: ""
}];
const dateO = [{
  date: ""
}];

export default class Confirm extends Component {
  storeGuest = event => {
    guest[0].guestnumber = event.target.value;
  }
  storeOption = event => {
    optionN[0].option = event.target.value;
  }
  storeType = event => {
    typeO[0].type = event.target.value;
  }
  storeDate = event => {
    dateO[0].date = event.target.value;
  }
    render(){
     return(
        <div>
           
         <Container>
        


    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Booking Reservation Confirmed</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Confirmation number: tyu17589RGH</Card.Subtitle>
        <Card.Text>
        <div>
        <label>Number of Guest:</label>
        <input type="number" onChange={this.storeGuest}/>
        <label>Time:</label>
        <input type="text" onChange={this.storeOption}/>
        <label>Number of Guest:</label>
        <input type="number" onChange={this.storeType}/>
        <label>Number of Guest:</label>
        <input type="date" onChange={this.storeDate}/>
      </div>

       
          
        </Card.Text>
        <Card.Link href="#home">Return Home</Card.Link>
        
      </Card.Body>
    </Card>

         </Container>
        
        </div>
     ); 
    }
}