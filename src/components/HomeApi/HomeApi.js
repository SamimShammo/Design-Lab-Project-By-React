import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import { Col, Container } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';

const HomeApi = () => {
    const [home, setHome] = useState([])
    useEffect(() => {
        fetch('./homeCourse.json')
         .then(res => res.json())
         .then(data => setHome(data))
    }, [])
    return (
        <div>
         <Container>
          <Row>
          <CardGroup>
            {
                 home.map(coursess => <Col lg={4} md={4} sm={6} col={12}><HomeCourse course={coursess}></HomeCourse></Col>)
            }
            </CardGroup>
            </Row>
            </Container>
        </div>
    );
};

export default HomeApi;