import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Offcanvas, Row, Stack } from 'react-bootstrap'
import { useSelector , useDispatch} from 'react-redux';
import { CloseCat} from '../Redux/action/ReduControl';
import CartItems from './CartItems';
 

const Cart = () => {
  const CartState = useSelector((state) => state.tistIsOpctin);
  const state = useSelector((state) => state.handleCart)


  const dispatchCart = useDispatch();
  const CloseCats = () => { 
    dispatchCart(CloseCat())
  }

//  console.log(CartState)
  return (  
    <div>
        <Offcanvas show={CartState} onHide={CloseCats} placement='start' style={{width:'470px'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shoping in Cart ({state.length})</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack>
            {/* <Row> */}
            {
              state.map(item => {
                return(
                  <CartItems key={item.id} {...item}/>
                )
              })
            }

           
             {/* </Row> */}
          </Stack>
         
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Cart