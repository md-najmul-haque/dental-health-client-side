import React from 'react';
import { Carousel } from 'react-bootstrap';


import banner1 from '../../../images/banner/banner1.png'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.png'



const Banner = () => {
    return (

        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>My Chamber</h3>
                    <p>Best environment for best quality treatment and service</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Pediatric dental service</h3>
                    <p>Special care for baby and children</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Healthy teeth for healthy life </h3>
                    <p>Healthy teeth for perfect smile</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;