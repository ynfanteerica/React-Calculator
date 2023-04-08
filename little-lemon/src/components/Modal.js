import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {useNavigate} from "react-router-dom"



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
   



    let history = useNavigate();   

    function submit(e){
        e.preventDefault();
      
     
      history('/confirm') 
    }
function handle(e){
const newdata={...data}
newdata[e.target.id] = e.target.value
setData(newdata)
console.log(newdata)

}

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
              
<Form.Select value={data.option} onChange={(e) =>handle(e)}  aria-label="Default select example"> 
      <option>Select Your Time</option>
      <option  id='option' value="12:45pm">12:45pm</option>
      <option  id='option' value="1:45pm">1:45pm</option>
      <option  id='option' value="2:45pm">2:45pm</option>
    </Form.Select>
     <div>
    <label className='text1'>Occasion:</label>
    </div>
    {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3" onChange={(e) =>handle(e)} value={data.type}>
          <Form.Check
            inline
            label="Birthday"
            name="group1"
            type={type}
            value="Birthday"
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Anniversary"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            value="Anniversary"
          />
          <Form.Check
            inline
            label="Private Party"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
            value="Private Party"
          />
        </div>
      ))}
             <Form.Control type="date" id="date"  value={data.date} onChange={(e) =>handle(e)} />
             <div className='button1'>
              
                            <button
              type="Submit">Submit</button>
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
      
      
      
    </>
) ;
}

export default Modal1;