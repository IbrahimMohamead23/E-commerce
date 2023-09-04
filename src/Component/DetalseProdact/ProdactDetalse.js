import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {OpenCat, addCart} from '../Redux/action/ReduControl'
import {removeCart} from '../Redux/action/ReduControl'
// import { Open } from '../Redux/Rduser/Opctin';
import { useParams } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { FaRegStarHalfStroke } from "react-icons/fa6";


const ProdactDetalse = () => {
  const api_Url = "https://fakestoreapi.com/products";
  const params = useParams();
  const [product , setProduct] = useState([])
  const [loading , setLoading] = useState(false)
  // const state = useSelector((state) => state.handleCart)

  
  const dispatchCart = useDispatch();
   const CartOpen = () => {
      dispatchCart(OpenCat())
   }

  const dispatch = useDispatch();
  const addProduct = (products) => {
    dispatch(addCart(products))
  }

  // const dispatchRemo = useDispatch();
  // const removProduct = (products) => {
  //   dispatchRemo(removeCart(products))
  // }


  // const opctin = useDispatch();
  //   const opens = () => {
  //     dispatch(Open)
  //   }

  useEffect(() => {
    setLoading(true)
    fetch(`${api_Url}/${params.prodactId}`).then((res) => res.json()).then((data) => setProduct(data));
    setLoading(false)
  });


  const Loading = () => {
    return(
      <>
          <Col md='6'>
             <Skeleton height={400}/>
          </Col>

          <Col md='6' style={{lineHeight:2}}>
             <Skeleton height={50} width={300}/>
             <Skeleton height={75}/>
             <Skeleton height={25} width={150}/>
             <Skeleton height={50}/>
             <Skeleton height={150}/>
             <Skeleton height={50} width={100}/>
             <Skeleton height={50} width={100} style={{marginLeft:6}}/>
          </Col>
      </>
    )
  }


  const ShowProduct = () => {
    return(
      <>
          <Col md='6'>
                 <img src={product.image} alt='img-items' style={{width:'350px', height:'350px'}} />
            </Col>

            <Col style={{ }}>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='d-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                       Reting {product.rating && product.rating.rate}
                       <FaRegStarHalfStroke style={{fontSize:'22px'}}/> 
                       <FaRegStarHalfStroke style={{fontSize:'22px'}}/> 
                       <FaRegStarHalfStroke style={{fontSize:'22px'}}/> 
                </p>
                <h3 className='d-6 fw-bold my-4'>${product.price}</h3>  
                <p className='lead'>{product.description}</p>

                <Button onClick={() => addProduct(product)} className='px-4 py-2 me-2' variant='dark'>Add to Cart</Button>
                <Button onClick={() => CartOpen()} className='py-2' variant='dark'>Go to Cart</Button>
                {/* <Button onClick={()=> removProduct(product)} className='py-2' variant='danger'>remove</Button> */}

              
            </Col>
            {/* <DetalseProduct addProduct={addProduct} {...prodact}/> */}

            {/* <Button>tisting</Button> */}

      </>
    )
  }
 
  return (
    <Container>
           <Row className='mt-5'>
              {loading ? <Loading/> : <ShowProduct/>}
           </Row>

    </Container>
  )
}

export default ProdactDetalse