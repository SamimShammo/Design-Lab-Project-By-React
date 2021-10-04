import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
         <div className="footer">
              <Container>
                   <div className="footer-img">

                   </div>
               <Row>
                   <Col lg={12} md={12} sm={12}>
                   <div className="information">
                      <Col lg={6}> <div className="address">
                   
                   <ul>
                       <li> Address : Avenue Piccad 234 CITY</li>
                       <li>City : New York ( US )</li>
                       <li>Phone : 00 837920234</li>
                       <li>Email : info@designlab.com</li>
                   </ul>
                   </div>
               
              </Col>
                 <Col lg={6}>
                     <div className="footer-icon">

                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                 </Col>
                     </div>
                  
              </Col>
               </Row>
                 <Row>
                 <hr />
                   <div className="copyRight">
                      <p>© Copyright 2021 Web Design Lab</p>
                   </div>
                 </Row>
               </Container>
         </div>
    );
};

export default Footer;