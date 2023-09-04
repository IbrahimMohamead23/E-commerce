import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux';
import { removeCart } from '../Redux/action/ReduControl';
import { addCart } from '../Redux/action/ReduControl';


const CartItems = ({title, image, price,category, rating, qty , id}) => {
    const prodact = useSelector((state) => state.handleCart)

    const [count , setCount] = useState(qty)

  const dispatchDeletItem = useDispatch();
  const RemoveItemInCart = (id) =>{
    dispatchDeletItem(removeCart(id))
  }


  const addItem = () => {
      setCount(count + 1)
      // prodact.qty

  }

  const decremintItem = () => {
      setCount(count - 1)
      // prodact.qty


  }

  // console.log(count)

  return (
    <Row style={{gap:'1.5rem'}} className='text-center'>
            <Col md='3'>
                 <img src={image} alt='img-items' style={{width:'125px', height:'75px'}} />
            </Col>

            <Col md='6' className='mb-4'>
                <h5 className='d-5'>{title}</h5>
                <p className='d-6 fw-bold'>
                  {count} X ${price} = {count * price}                  
                </p>  
                <Button onClick={addItem} className='me-2' variant='dark'>+</Button>
                <Button onClick={decremintItem} variant='dark'>-</Button>
            </Col>

            <Col >
               <Button onClick={() => RemoveItemInCart(prodact)} variant='outline-danger'>X</Button>
            </Col>
    </Row>
  )
}

export default CartItems