import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth()
    const mail = user.email

    const [myOrder,setMyOrder] = useState([])

    useEffect(()=>{
        fetch('http://localhost:7000/users')
        .then(res => res.json())
        .then(data => {
            const onlyMine = data.filter(mine => mine.email === mail)
            setMyOrder(onlyMine)
        })
    },[])

    console.log(myOrder)


    const deleteBtn = id => {
        const confirm = window.confirm('Are you sure wanna remove this?')
        if (confirm) {
            fetch(`http://localhost:7000/users/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                const newAll = myOrder.filter(b => b._id !== id)
                setMyOrder(newAll)
            }
        })
        }
    }

    return (
        <div>
            {
            (user.email) ? <div>
            <Container>
                <div className="row py-5">
                    <div className="col-12 col-md-3 shadow-lg">
                        <div>
                            <div className="text-start">
                                <h4 className="m-0 p-0"><span className="p-0 m-0 fs-1">+</span> Add a CAR</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                    {
                        (myOrder.length !== 0) ? <Row xs={1} md={2} className="g-4">
                        {
                            myOrder.map(order => <div key={order._id}>
                                {
                                    console.log('ok', order)
                                }
                                <div style={{height:'150px'}} className="d-flex align-items-center justify-content-center w-100 border border-1">
                                    <div className="d-flex align-items-center">
                                        <div className="w-50 h-100"><img className="w-75 h-100" src={order?.img} alt="" /></div>
                                        <div className="text-start">
                                            <h6 className="p-0 m-0">Car name : {order?.title}</h6>
                                            
                                            <Button className="mx-2" variant="danger" onClick={()=>deleteBtn(order._id)}>Cancel</Button>
                                            <Button className="mx-2" variant="warning">{order?.status}</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </Row> : <h1>Loading...</h1>
                    }
                    </div>
                </div>
            </Container>
        </div> : <Container>
                <div style={{height:'75vh'}} className="denied d-flex align-items-center justify-content-center">
                    <div>
                        <Button>Back to home</Button>
                    </div>
                </div>
            </Container>
        }
        </div>
    );
};

export default MyOrder;