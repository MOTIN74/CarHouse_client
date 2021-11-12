

import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
                <Carousel fade>
                    <Carousel.Item className="position-relative">
                        <img
                        style={{height:'75vh',objectFit:'cover'}}
                        className="d-block w-100"
                        src="https://i.ibb.co/wSqn1Rd/car-10.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption className="position-absolute top-50">
                        <h3 className="text-primary" style={{fontSize:'60px',fontFamily:"'Oswald', sans-serif"}}>Wow Factor Standard</h3>
                        <h6 className="text-white" style={{fontSize:'20px',fontFamily:"'Oswald', sans-serif"}}>Explore the Cars</h6>
                        <Button variant="outline-secondary">See More</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="position-relative">
                        <img
                        style={{height:'75vh',objectFit:'cover'}}
                        className="d-block w-100"
                        src="https://i.ibb.co/RHqrTHs/car-2.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption className="position-absolute top-50">
                        <h3 className="text-danger" style={{fontSize:'60px',fontFamily:"'Oswald', sans-serif"}}>Explore Your Dream Car</h3>
                        <h6 className="text-white" style={{fontSize:'20px',fontFamily:"'Oswald', sans-serif"}}>More attractive and Passhinate</h6>
                        <Button variant="outline-secondary">See More</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="position-relative">
                        <img
                        style={{height:'75vh',objectFit:'cover'}}
                        className="d-block w-100"
                        src="https://i.ibb.co/MVFvssP/car-2-1.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption className="position-absolute top-50">
                        <h3 className="text-warning" style={{fontSize:'60px',fontFamily:"'Oswald', sans-serif"}}>Welcome To Car House</h3>
                        <h6 className="text-white" style={{fontSize:'20px',fontFamily:"'Oswald', sans-serif"}}>Most colorful and Luxarious</h6>
                        <Button variant="outline-warning">See More</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;