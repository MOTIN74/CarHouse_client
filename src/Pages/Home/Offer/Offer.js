import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Offer = () => {
    return (
        <div className="cus-bg-2 w-100">
            <Container>
                <div className="d-flex align-items-center justify-content-center" style={{height:'60vh',width:'100%'}}>
                    <div className="w-100">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-9 text-light cus-pos">
                                <h1>Explore World and make self a great traveller</h1>
                                <p>We have fun but we don't mess around.  You and your order is important to us.  We will get your job done as quickly as possible without.Protection is any measure taken to guard a thing against damage caused by outside forces. Protection can be provided to physical objects</p>
                            </div>
                            <div className="col-12 col-md-3 cus-pos">
                                <Button variant="danger">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Offer;