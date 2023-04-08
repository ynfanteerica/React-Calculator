import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


import React,{ Component } from 'react'

export default class Form extends Component {
    render(){
     return (
        <div>
            <Container>
                <Card>
                <form>
           <label>
              Number of guests:
              <input type="number" name="guests" />
              </label>
              <button type="Submit">Submit</button>
               </form>
                </Card>
            </Container>
        </div>
     )   
    }
}