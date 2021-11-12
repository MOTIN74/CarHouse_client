import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillDislike,AiFillLike,AiFillHeart } from "react-icons/ai";

const ExploreCars = () => {
    const [allItems,setAllItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:7000/cards')
        .then(res => res.json())
        .then(data => setAllItems(data))
    },[])
    return (
        <div className="py-5">
        <Container>
            <h1 style={{fontSize:'40px'}}>Explore More Cars</h1>
            <p className="pb-5 text-center w-50 mx-auto">In order to be considered a luxury car, the vehicle must have high-end features that go above and beyond the average necessities. The term luxury is used to categorize vehicles that are equipped with better performance capabilities, lavish interiors and all the latest safety and technology features.</p>
            {
                (allItems.length !== 0) ? <Row xs={1} md={3} className="g-4">
                {
                    allItems.map(item => <Col key={item._id}>
                        <Card className="shadow-lg">
                          <Card.Img style={{height:'220px'}} variant="top" src={item.carsImg} />
                          <Card.Body>
                            <Card.Title>{item.carsTitle}</Card.Title>
                            <Card.Text>{item?.carsDes?.slice(0,120)}</Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to={`/cards/${item._id}`}><Button className="bg-success">Select This Car</Button></Link>
                                <div>
                                    <span><AiFillHeart className="mx-2 fs-3 text-danger"/><AiFillLike className="mx-2 fs-3 text-info"/><AiFillDislike className="mx-2 fs-3 text-warning"/></span>
                                </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>)
                }
                </Row> : <div className="w-25 mx-auto">
                    <img className="w-100" src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" />
                </div>
            }
        </Container>
    </div>
    );
};

export default ExploreCars;