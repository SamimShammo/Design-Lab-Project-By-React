import React from 'react';
import { Card } from 'react-bootstrap';
import './Teacherinfo.css'

const Teacherinfo = (props) => {
     const {name, gender, age, img, location, about, expertise, charge} = props.teacher
    return (
        <Card className="teacher-card shadow">
        <Card.Img variant="top" src={img} className="teacher-img"/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
          <Card.Text>{about}</Card.Text>
          <Card.Text>Location : {location}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
        <div className="teach">
        <button className="teacher">View Profile</button>
        </div>
        </Card.Footer>
      </Card>
    );
};

export default Teacherinfo;