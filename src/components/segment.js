import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../App.css'
import SegmentForm from './SegmentForm';
export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary"  style={{marginTop:'2rem'}}  onClick={handleShow}>
        Save segment
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{overflow:"scroll"}}>
        <Offcanvas.Header >
          <h3>Save Segment</h3>
          {/* <Savesegment/> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SegmentForm/>
          <a href=''>+Add new schema</a>
        <div style={{
           display: 'flex',
           marginTop:'13rem',
        }}>
        <Button variant="outline-success" >Save the segment</Button>
        <Button variant="outline-danger" >close</Button>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

