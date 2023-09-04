import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import Ecom1 from '../images/slid-e-com4.jpg'
import Ecom2 from '../images/slid-e-com.png'
import Ecom3 from '../images/slid-e-com3.jpg'

const CarouselComponent = () => {

        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);
        };
      
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='slider-img'>
              <img src={Ecom1} style={{width:'100%', height:'100%'}} />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item className='slider-img'>
            <img src={Ecom2} style={{width:'100%', height:'100%'}}/>
              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item className='slider-img'>
            <img src={Ecom3} style={{width:'100%', height:'100%'}}/>
              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        );
}

export default CarouselComponent