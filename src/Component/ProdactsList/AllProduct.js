import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProdactsList from './ProdactsList'

const AllProduct = () => {
  return (
   <Container>
      
      <Row>
            <Col col='12' className='mt-5 mb-2' >
               <h1 className='d-6 fw-bolder text-center'>Lastest Products</h1>
               <hr/>
            </Col>
          </Row>

          <ProdactsList/>
   </Container>
  )
}

export default AllProduct