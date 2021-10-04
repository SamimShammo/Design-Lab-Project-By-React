import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Courses.css'

const Courses = (props) => {
    const { name, description, price, thumb_img, duration, mentor, type} = props.course
    console.log(props)
    return (

  <Card className="myCard shadow">
    <Card.Img variant="top" src={thumb_img} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text>{type}</Card.Text>
      <Card.Text>Mentor :  <b>{mentor}</b> </Card.Text>
      
        <Card.Title>USD ${price}</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Video Duration {duration}</small> <button className="enrol">Enrol Now</button>
    </Card.Footer>
  </Card>
 
 
    );
};

export default Courses;