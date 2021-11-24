import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillDislike,AiFillLike,AiFillHeart } from "react-icons/ai";
const Cards = () => {
    const [allItems,setAllItems] = useState([])

    useEffect(()=>{
        fetch('https://shrouded-wildwood-42642.herokuapp.com/cards')
        .then(res => res.json())
        .then(data => setAllItems(data))
    },[])
    return (
        <div className="py-5">
            <Container>
                <h1 style={{fontSize:'40px'}}>Our Products</h1>
                <p className="pb-5 text-center w-50 mx-auto">There are a lot of cars in our Car House. Facinate, attarctive, and flavoures car are wait for You.</p>
                {
                    (allItems.length !== 0) ? <Row xs={1} md={3} className="g-4">
                    {
                        allItems.slice(0,6).map(item => <Col key={item._id}>
                            <Card className="shadow-lg">
                              <Card.Img style={{height:'220px'}} variant="top" src={item.carsImg} />
                              <Card.Body>
                                <Card.Title>{item.carsTitle}</Card.Title>
                                <Card.Text>{item?.carsDes?.slice(0,120)}</Card.Text>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link to={`/cards/${item._id}`}><Button>Select This Car</Button></Link>
                                    <div>
                                        <span><AiFillHeart className="mx-2 fs-3 text-danger"/><AiFillLike className="mx-2 fs-3 text-primary"/><AiFillDislike className="mx-2 fs-3 text-dark"/></span>
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

export default Cards;