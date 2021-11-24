import React, { useEffect, useState } from 'react';
import { Button,Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth'
import { FaCheck,FaTrash } from "react-icons/fa";
import './Admin.css'

const Admin = () => {
    const {user} = useAuth()

    const [all,setAll] = useState([])
    const [allEvent,setAllEvent] = useState([])
    const [approve,setApprove] = useState(false)

    useEffect(()=>{
        fetch('https://shrouded-wildwood-42642.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setAll(data))
    },[approve])

    useEffect(()=>{
        fetch('https://shrouded-wildwood-42642.herokuapp.com/cards')
        .then(res => res.json())
        .then(data => setAllEvent(data))
    },[])


    const deleteBtn = id => {
        const confirm = window.confirm('Are you sure wanna remove this?')
        if (confirm) {
            fetch(`https://shrouded-wildwood-42642.herokuapp.com/users/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete successfull')
                    const newAll = all.filter(b => b._id !== id)
                    setAll(newAll)
                }
            }) 
        }
        
    }


    const deleteEvent = id => {
        const confirm = window.confirm('Are you sure wanna remove this?')
        if (confirm) {
            fetch(`https://shrouded-wildwood-42642.herokuapp.com/cards/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('Event Delete successfull')
                const newAllEvent = allEvent.filter(c => c._id !== id)
                setAllEvent(newAllEvent)
            }
        })
        }
        
    }

    const update = {
        status : 'Approved'
    }

    const updateBtn = id => {
        fetch(`https://shrouded-wildwood-42642.herokuapp.com/users/${id}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(update)
        }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('approved successfully')
                setApprove(!approve)
            }
        })
    }

    return (
        <div>
            {
                (user.email) ? <Container>
                    <div>
                    <h3 className="text-center py-5">Clients Management</h3>
                    <Row xs={3} md={5} className="g-4 border border-2">
                        <p className="display text-center">Car Name</p>
                        <p className="text-center">Customer</p>
                        <p className="display text-center">Email</p>
                        <p className=" text-center">Status</p>
                        <p className="text-center">Action</p>
                    </Row>
                    {
                        all.map(a => <Row xs={3} md={5} className="g-4" key={a._id}>
                            <p className="display text-start">{a.title}</p>
                            <p className="text-center">{a.name}</p>
                            <p className="display text-center">{a.email}</p>
                            <p className=" text-center">{a?.status}</p>
                            <p className="text-center"><FaCheck onClick={()=>updateBtn(a._id)} className="mx-2"/><FaTrash onClick={()=>deleteBtn(a._id)} className="mx-2"/></p>
                        </Row>)
                    }
                    </div>


                    <div>
                        <h3 className="text-center py-5">CAR Management</h3>
                        <div className="row">
                            <div className="col-12 col-md-12">
                            <Table className="customWidth" striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>CAR NAME</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                {
                                    allEvent.map(b => <tbody key={b._id}>
                                        <tr>
                                        <td>{b.carsTitle}</td>
                                        <td><FaTrash onClick={()=>deleteEvent(b._id)} className="mx-2"/></td>
                                        </tr>
                                    </tbody>)
                                }
                                </Table>
                            </div>
                        </div>
                    </div>
                </Container> : <Container>
                <div style={{height:'75vh'}} className="denied mb-5 d-flex align-items-center justify-content-center">
                    <img className="position-absolute top-0 start-0 w-100 h-100" src="https://ak.picdn.net/shutterstock/videos/6696692/thumb/5.jpg" alt="" />
                    
                </div>
            </Container>
            }
        </div>
    );
};

export default Admin;
