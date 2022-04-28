import React from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Cardgroup = () => {
    return (
        <>
        <h4 style={{color:"red"}}>Characters</h4>
        <Row  md={5} className="g-4">
  {Array.from({ length: 5 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://support.primaryimage.uk/wp-content/uploads/2017/07/400x200.png" style={{objectFit:"cover", height:"200px"}} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <div>
        <Button Style={{float:"left",}} variant="outline-primary">Primary</Button>
        <Button variant="outline-warning" style ={{float:"right"}}><i class="fa-regular fa-heart"></i></Button>{' '}
        </div>
       
      </Card>
     
    </Col>
  ))}
</Row>
</>
        )

};
