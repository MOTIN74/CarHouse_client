import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Container>
            <div className="py-5">
                    <h1>Contact Us</h1>
                    <div className="row pt-5">
                    <div className="col-12 col-md-5">
                            <img src="https://i.ibb.co/KVsrLRL/119017530-valkyrie-rtr.jpg" alt="" className="w-100" />
                        </div>
                        <div className="col-12 col-md-5 text-start">
                        <div className="">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Number</Form.Label>
                            <Form.Control type="phone" placeholder="Mobile Number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;