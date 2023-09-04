import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import cardImg from '../../Component/images/e-com1.jpg'
import Prodact from './Prodact';

const ProdactsList = () => {
    const api_url = 'https://fakestoreapi.com/products'; // prodacts
    const cat_api = 'https://fakestoreapi.com/products/categories' // catagory
    const [prodact, setProdact] = useState([]);
    const [catagory, setCtagory] = useState([]);

    // get all Prodacts
    const getAllProdacts = () => {
        fetch(api_url).then((res) => res.json()).then((data) => setProdact(data))
    }

    // getCatagory
    const getCatagory = () => {
        fetch(cat_api).then((res) => res.json()).then((cat) => setCtagory(cat))
    }

    // get in Catgory
    const getInCatgory = (catName) => {
        fetch(`https://fakestoreapi.com/products/category/${catName}`)
        .then((res) => res.json())
        .then((data) => setProdact(data))
    }

    useEffect(() => {
        getAllProdacts()
        getCatagory()
       
        
    },[]);




  return (
    <div className='my-3'>
        {/* <h2 className='text-center'>Prodactes </h2> */}

        <Row className='mopill'>
            <Col className='catgory-list'>
                <Button variant="outline-dark"  onClick={() => getAllProdacts()}>All</Button>
            {
                catagory.map(item => {
                    return(
                        <Row>
                                <Button variant="outline-dark" key={item} onClick={() =>  getInCatgory(item)}>{item}</Button>  

                        </Row>
                    )
                })
             }
            </Col>
        </Row> 

        <Row xs='1' md='2' lg='3' >
           
           { 
            prodact.map(item => {
                return(
                    <Col key={item.id} className='mb-4'>
                         <Prodact items={item}/>

                    </Col>
                )
            })
           }
          
        </Row>

    </div>
  )
}

export default ProdactsList