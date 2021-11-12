
import React from 'react';
import { Container } from 'react-bootstrap';
const OurTeam = () => {
    return (
        <div className="py-5 bg-secondary">
            <Container> 
                <h1 className="text-center">Meet Our Team</h1>
                <p className="pb-5 w-75 text-center mx-auto">CAR HOUSE's most important asset is our global workforce - the men and women working hard to serve our customers. Having a skilled, capable and engaged workforce is vital to our continued success. We strive to create a culture in which our employees develop through experiences, coaching and training to become a high-performance team.</p>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className=" py-5 text-center">
                           
                            
                            <img className="rounded"   src="https://i.ibb.co/7rCXk10/avatar-2.jpg" alt="" />
                            
                            <div><h2>RAKy</h2>
                            <h5>CEO</h5></div>
                           
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className=" py-5 text-center">
                            
                           
                            <img className="rounded" src="https://i.ibb.co/s5sV7fr/avatar-3.jpg" alt="" />
                          
                            <div><h2>SMITH</h2>
                            <h5>Managing Director</h5></div>
                      
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className=" py-5 text-center">
                            <img className="rounded" src="https://i.ibb.co/BzMRtSd/avatar-1.jpg" alt="" />
                           
                            <div><h2>PAUL</h2>
                            <h5>Executive</h5></div>
                           
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurTeam;