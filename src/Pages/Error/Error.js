import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Error = () => {
    return (
        <div>
            <Container>
                <div style={{height:'75vh'}} className="d-flex align-items-center justify-content-center">
                    <div>
                        <Button>Back to home</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Error;