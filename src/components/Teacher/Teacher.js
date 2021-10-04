import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Teacherinfo from '../Teacherinfo/Teacherinfo';
import './Teacher.css'

const Teacher = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('./teachers.json')
          .then(res => res.json())
          .then(data => setTeachers(data))
    },[])
    return (
        <div className="teacher-container">
            <h1 style={{textAlign:"center"}}>Our All Teachers</h1>
            <Container>
                <Row>
                    {
                        teachers.map(teacher => <Col lg={4} md={6} sm={6} col={12}><Teacherinfo teacher={teacher}></Teacherinfo></Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Teacher;