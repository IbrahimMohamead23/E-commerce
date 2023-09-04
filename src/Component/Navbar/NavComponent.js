import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import imgLogo from '../images/e-com_logo.jpg'
import { FaUser } from "react-icons/fa";
import {FaCartPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux';
import {useDispatch } from 'react-redux';
import { OpenCat } from '../Redux/action/ReduControl';

const NavComponent = () => {
  const state = useSelector((state) => state.handleCart)

  
   const dispatchCart = useDispatch();
   const CartOpen = () => {
      dispatchCart(OpenCat())
   }

  //  console.log(state)
  return (
    <Navbar expand="lg" className="bg-body-white py-3 shadow-sm">
      <Container>
        <Navbar.Brand >
          <NavLink to='/'>
          <img src={imgLogo} alt='imglogo' style={{width:'40px' , height:'40px'}}/>

          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-link'  to='/' as={NavLink}>Home</Nav.Link>
            <Nav.Link className='nav-link' to='/product' as={NavLink}>Products</Nav.Link>
            <Nav.Link className='nav-link' to='/about' as={NavLink}>About</Nav.Link>
            
          </Nav>
          <Form className="d-flex w-100">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
          <NavLink to="/login">
              <Button variant="outline-dark" className='ms-2'>
              <FaUser />    Login
              </Button>
          </NavLink>

          <NavLink to='#'>
              <Button variant="outline-dark" className='ms-2' onClick={() => CartOpen()} >
                   <FaCartPlus size={22}/>Cart({state.length})
              </Button>
            </NavLink>

        

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavComponent