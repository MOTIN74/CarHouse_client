import React from 'react';
import { Container } from 'react-bootstrap';
import { FaSeedling,FaShieldVirus,FaUsers } from "react-icons/fa";
const Best = () => {
    return (
        <div className="py-5 bg-info">
            <Container>
                <h1 className="text-center">Why We are your best choice</h1>
                <p className="pb-5 w-75 text-center mx-auto">When done right and also used as part of a digital sales process, virtual tours can benefit you greatly. Many companies still don't use them to their full potential to increase sales and where more people are trying to avoid physical contact, this technology is definitely fulfilling a need and filling a void.</p>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="px-3 py-5 text-center">
                            <FaSeedling style={{fontSize:'60px',color:'green'}}/>
                            <h2>Natural friendly</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="px-3 py-5 text-center">
                            <FaShieldVirus style={{fontSize:'60px'}}/>
                            <h2>Protection</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="px-3 py-5 text-center">
                            <FaUsers style={{fontSize:'60px',color:'green'}}/>
                            <h2>Commitment</h2>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Best;

