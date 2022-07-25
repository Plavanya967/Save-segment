import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const schema={
    
   firstname:"",
   lastname:"",
   
    age:"",
    accountname:"",
    city:"",
    state:"",
}
export default function FormExample() {
  const [validated, setValidated] = useState(false);
  const[formValue, setFormValue]= useState(schema);
  const{ firstname,lastname,age,accountname,city,state}= formValue;
  const handleSubmit = async(event) => { 
      event.preventDefault();   
//     if(firstname&& lastname && age&& accountname&& city &&state){
//         const updatedData={...formValue}
//         const response= await axios.post("https://localhost:5000/segment", updatedData)
//         if(response.status === 201){
//             alert ('Updated successfully');
//         }
//         else{
//             alert('Something went wrong');
//         }
//         setFormValue({firstname:"",lastname:"",age:"",accountname:"",city:"",state:""});
    }
 
    setValidated(true);
  };
  const input=(e)=>{
    let {name, value}= e.target;
    setFormValue({...formValue,[name]:value})
  }
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name='firstname'
            onChange={input}
            placeholder="First name"            
            value={firstname}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name='lastname'
            onChange={input}
            placeholder="Last name"          
            value={lastname}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* <Row className="mb-3">
      <form>     
      <select className="form-select-padding-x-sm "   style={{borderRadius:'5px'}} > 
      <option value={gender} selected>Gender</option>
      <option value={gender}>Male</option>
      <option value={gender}>Female</option>
      <option value={gender}>Others</option>
     </select>
      </form>
      </Row> */}
      <Row>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Age</Form.Label>
          <Form.Control
            required
            type="number"
            name='age'
            onChange={input}
            placeholder="age"          
            value={age}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Account name</Form.Label>
          <Form.Control
            required
            type="text"
            name='accountname'
            onChange={input}
            placeholder="Account name"            
            value={accountname}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text"
           placeholder="City"
           name='city'
           onChange={input}
           value={city}
           required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" 
          onChange={input}
          name='state'
          value={state}
          placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>        
      </Row>  
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

