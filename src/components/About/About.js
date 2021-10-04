import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import img from '../Img/about.jpg'
import { useHistory } from 'react-router';

const About = () => {

   const history = useHistory()
   const goOurCourse = () => {
       history.push('/course')
   }
    return (
        <div className="about-container">
         <Container className="container-about">
               <Row>
                 
                 <Col lg={7} md={6} sm={12} xs={12}>
                     <div className="about-img">
                       <img src={img} alt="" className="img-fluid"/>
                     </div>
                   </Col>
                  <Col lg={5} md={6} sm={12} xs={12}>
                     <div className="about-content">
                      <h1 >About us</h1>
                       <h2 >How to Improve Learning Skills</h2>
                        <p className="banner-p"> Project-Based Learning Students go beyond the textbook to study complex topics based on real-world issues, such as the water quality in their communities or the history of their town, analyzing information from multiple sources, including the Internet and interviews with experts.</p>
                        <button onClick={goOurCourse} className="btn-our">Our Course</button>
                     </div>
                   </Col>

                 </Row>
      </Container>
        </div>
    );
};

export default About;