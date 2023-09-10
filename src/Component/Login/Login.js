import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <Container>
        <Row className='mt-5' style={{minHeight:'68vh', maxWidth:'100%'}}>
            <Col className='justify-content-end' >
            <Form className='form-login'>
                <h4 className='text-center'>Login</h4>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
               <div className='d-flex justify-content-between'>
               <p><NavLink to='/rejestar'>Rejestar</NavLink></p>
               <p><a href='#'>Forgot your password</a></p>
               </div>
                <Button className='w-100' variant='outline-dark'>Submit</Button>
                </Form>
            </Col>
        </Row>

    </Container>
  )
}

export default Login