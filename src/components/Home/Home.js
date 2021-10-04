import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import HomeApi from '../HomeApi/HomeApi';
import HomeCourse from '../HomeCourse/HomeCourse';
import './Home.css'

const Home = () => {

    const history = useHistory()
    const see_all_course = () => {
        history.push('/course')
    }
    return (
    <div className="">
            <div className="banner-container">
            <div className="banner">

           
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <div className="content-container">
                      <h1 className="banner-heading">Education</h1>
                        <h1 >How to Improve Learning Skills</h1>
                         <p className="banner-p">Putting in quality practice requires a lot of attention and effort. It is therefore important that you plan to do your practice at a time of the day when you are rested enough to put your full focus towards the task you are learning.</p>
                      </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
        <div className="home-api-course">
        <HomeApi></HomeApi>
   <div className="btn-course">
   <button className="see-all" onClick={see_all_course}>See All Course</button>
   </div>
        </div>
    </div>
    );
};

export default Home;