import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import Card from 'react-bootstrap/Card';

//import Confirm from './Confirm'



function Modal1() {
    const [show, setShow] = useState(false);
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState({
        guestnumber:"",
        option: "",
        type: "",
        date: "",
    })
    


    function submit(e){
        e.preventDefault();
    
       alert("thank you");
      
    }
function handle(e){
const newdata={...data}
newdata[e.target.id] = e.target.value
setData(newdata)

console.log(newdata)

}
const guestnumber = data.guestnumber;
const option = data.option;
const type = data.type;
const date = data.date;

return (
    <>
     
     <div>
      <Button variant="primary" onClick={handleShow} id='reservation'>
        Reserve A Table
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Your Table Here!!</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form onSubmit={(e)=> submit(e)}>
            
           <label>
              Number of guests:
              <input onChange={(e) =>handle(e)}  id='guestnumber'value={data.guestnumber} type="number" name="guests" />
              </label>
              
<Form.Select  id='option' value={data.option} onChange={(e) =>handle(e)}  aria-label="Default select example"> 
      <option >Select Your Time</option>
      <option   value="12:45pm" >12:45pm</option>
      <option  value="1:45pm">1:45pm</option>
      <option  value="2:45pm" >2:45pm</option>
    </Form.Select>
     <div>
    <label className='text1'>Occasion:</label>
    </div>
    {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3" onChange={(e) =>handle(e)}>
          <Form.Check
            inline
            label="Birthday"
            name="group1"
            type={type}
            value="Birthday"
            id="type"
          />
          <Form.Check
            inline
            label="Anniversary"
            name="group1"
            type={type}
            id="type"
            value="Anniversary"
          />
          <Form.Check
            inline
            label="Private Party"
            name="group1"
            type={type}
            id="type"
            value="Private Party"
          />
        </div>
      ))}
             <Form.Control type="date" id="date"  value={data.date} onChange={(e) =>handle(e)} />
             <div className='button1'>
            
                            <button
              type="Submit">Submit</button>
              
             <div>
             
             </div>
        
               </div>
               </Form></Modal.Body>
        <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <Card style={{ width: '18rem' }} show={show} onHide={handleClose}>
      <Card.Body>
        <Card.Title>Booking Reservation Confirmed</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Confirmation number: tyu17589RGH</Card.Subtitle>
        <h3>userid: guest12345</h3>
        <Card.Text>
        <div>
        <label>Number of Guest:{guestnumber}</label>
        
        <label>Time:{option}</label>
        
        <label>Occasion:{type}</label>
        
        <label>Date:{date}</label>
      
        
       
       
      </div>

       
          
        </Card.Text>
        <Card.Link href="#home">Return Home</Card.Link>
        
      </Card.Body>
    </Card>
      
      
    </>
) ;
}

export default Modal1;
