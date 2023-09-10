import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FaPhoneFlip } from "react-icons/fa6";
import {FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footers p-3'>
    <Container >
        <Row>
            <Col className='text-center d-flex justify-content-center flex-column'>
               <div className='d-flex justify-content-center '>
                    
                        <div>
                        <h5><FaPhoneFlip/></h5>
                        <p>01115442864</p>
                        </div>  

                        <div className='mb-3 ms-4'>
                        <h5><FaEnvelope/></h5>
                        <a href='#'>hyma0985@gmil.com</a>
                        </div>  
               </div>

                 <div>
                    <h6>&copy; E-Commers 2023</h6>
                </div>            
            </Col>

           
        </Row>

    </Container>
    </div>
  )
}

export default Footer