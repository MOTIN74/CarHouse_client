import React, { useState } from 'react';
import { Container,Button, Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const AddProducts = () => {

    const {user} = useAuth()

    const [AddCars,setAddCars] = useState({})

    const handleTitle = e => {
        const newTitle = {...AddCars}
        newTitle.carsTitle = e.target.value
        setAddCars(newTitle)
    }

    const handleImg = e => {
        const newImg = {...AddCars}
        newImg.carsImg = e.target.value
        setAddCars(newImg)
    }

    const handleFee = e => {
        const newFee = {...AddCars}
        newFee.carsPrice = e.target.value
        setAddCars(newFee)
    }

    const handleDes = e => {
        const newDes = {...AddCars}
        newDes.carsDes = e.target.value
        setAddCars(newDes)
    }


    const formBtn = e => {
        fetch('http://localhost:7000/cards',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(AddCars)
        })
        .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added new car')
                    setAddCars({})
                }
            })

        e.preventDefault()
    }
    return (
        <div className="create">
            {
                (user.email) ? <Container>
                <div>
                    <h3 className="fw-bold text-danger">Add New Car</h3>
                    <div className="AddCars pb-5">
                            <Form className="text-start bg-light shadow p-5">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="fw-bold">Car Title</Form.Label>
                                <Form.Control onChange={handleTitle} className="border-0 rounded-0 border-bottom"  type="text" placeholder="Car Name" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="fw-bold">Car Image</Form.Label>
                                <Form.Control onChange={handleImg} className="border-0 rounded-0 border-bottom "  type="text" placeholder="Set an image Url" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="fw-bold">Price</Form.Label>
                                <Form.Control onChange={handleFee} className="border-0 rounded-0 border-bottom " type="text" placeholder="Car Cost" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="fw-bold">Description</Form.Label>
                                <Form.Control onChange={handleDes} className="border-0 rounded-0 border-bottom " type="text" placeholder="Description" required/>
                            </Form.Group>
                            <Button onClick={formBtn} className="w-100" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </div>
                </div> 
            </Container> : <Container>
                <div style={{height:'75vh'}} className="d-flex align-items-center justify-content-center">
                    {/* <div>
                        <Button>Back to home</Button>
                    </div> */}
                </div>
            </Container>
            }
        </div>
    );
};

export default AddProducts;