import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Addschema from './Addschema';
import { useState } from 'react';

function FormTextExample() {
    
  return (
    <>
      <Form.Label htmlFor="inputName">Enter Name of the Segment</Form.Label>
      <Form.Control
        type="text"
        id="inputName"
        name='segmentname'
        defaultValue='Segment name'
        aria-describedby="nameHelpBlock"
      />
      <Form.Text id="nameHelpBlock" muted>
        To save your segment, you need to add the schemas.
      </Form.Text>
      <div className="mb-2">
        {['segment'].map((direction) => (
          <DropdownButton
            
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="outline-secondary"
            title={` Add schema to ${direction} `}
          >
            <Addschema/>
          </DropdownButton>
        ))}
      </div>
      <div className="mb-2">
        {['Name'].map((direction) => (
          <DropdownButton
            
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="outline-secondary"
            title={` First ${direction} `}
          >
           
          </DropdownButton>
        ))}
      </div>
      <div className="mb-2">
        {['Name'].map((direction) => (
          <DropdownButton
            
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="outline-secondary"
            title={` Account ${direction} `}
          >
            
          </DropdownButton>
        ))}
      </div>
    </>
  );
}

export default FormTextExample;