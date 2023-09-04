import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart } from '../Redux/action/ReduControl';

const Prodact = (props) => {
    const state = useSelector((state) => state.handleCart)
    const {items} = props;
    const [product, setProduct] = useState([])


    // const dispatchAddCart = useDispatch();
    // const AddToCart = (id) => {
    //     dispatchAddCart(addCart(id))
    // }

  return (
            // <Card style={{ width: '100%',height:'600px', marginBottom:'1rem'}}>
            <Card className='h-100 text-center p-4'>
                <Card.Img variant="top" src={items.image} style={{width:'100%', height:'300px'}}/>
                    <Card.Body style={{height:'auto' }}>
                        <Card.Title>{items.title.substring(0,12)}...</Card.Title>
                            <Card.Text className='fw-bold'>
                               ${items.price}
                            </Card.Text>

                            <NavLink to={`/prodact/${items.id}`}> 
                            {/* <Button onClick={()=> AddToCart(product)} className='mb-2' variant="dark"  size='sm'>Add to Cart</Button><br/> */}
                                <Button variant="outline-dark"  size='sm'>Buy Now</Button>

                            </NavLink> 
                    </Card.Body>
                </Card>
  )
}

export default Prodact