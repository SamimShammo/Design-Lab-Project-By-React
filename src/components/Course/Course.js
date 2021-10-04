import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Course.css'

const Course = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch('./courses_api.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div>
           <h1 className="ourCourse"> Our Courses</h1>
          <Container>
          <Row>
          <CardGroup>
           {
                course.map(allCourse => <Col lg={4}  md={4} sm={6}col={12}><Courses
                    
                                key={allCourse.id}
                     course={allCourse}
                     ></Courses></Col>)
            }
             </CardGroup>   
           </Row>
          </Container>
        </div>
    );
};

export default Course;