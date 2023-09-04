import React from 'react'
import CarouselComponent from '../Slider/CarouselComponent'
import { Col, Container, Row } from 'react-bootstrap'
import ProdactsList from '../ProdactsList/ProdactsList'

const HomePage = () => {
  return (
    <>
       <CarouselComponent /> 
      <Container>

        <Row>
        <Row>
            <Col col='12' className='mt-5 mb-2' >
               <h1 className='d-6 fw-bolder text-center'>Lastest Products</h1>
               <hr/>
            </Col>
          </Row>

          <ProdactsList/>
        </Row>


      </Container>
    </>
  )
}

export default HomePage