import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Rejestar = () => {
  return (
    <Container>
    <Row className='mt-5'>
        <Col className='justify-content-end' >
        <Form className='form-login' style={{height:'auto'}}>
            <h4 className='text-center'>Create an account</h4>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="ferst name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
         
            <Button className='w-100' variant='outline-dark'>Submit</Button>
            <span style={{margin:'2px 46%'}}><NavLink to='/login' >login</NavLink></span>
            </Form>
        </Col>
    </Row>

</Container>
  )
}

export default Rejestar