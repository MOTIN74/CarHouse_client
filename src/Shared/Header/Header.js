import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {logOut,user} = useAuth()
    return (
        <div>
            <Navbar bg="light" expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand as={Link} style={{fontFamily:"'Quicksand', sans-serif",fontSize:'30px'}} to="/home"> CAR HOUSE </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0 text-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="mx-2" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="mx-2" as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="mx-2" as={Link} to="/contact">Contact Us</Nav.Link>
                        
                        <Nav.Link className="mx-2" as={Link} to="/dashboard">Dashboard</Nav.Link>
                      
                         {
                            user.email ? <Nav.Link className="mx-2" onClick={logOut}>Log out</Nav.Link> : <Nav.Link className="mx-2" as={Link} to="/log">Log in</Nav.Link>
                        }
                    </Nav>
                    <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <div style={{height:'50px',width:'50px',borderRadius:'50px',border:'2px solid grey',overflow:'hidden',position:'relative'}}>
                            <img src={user?.photoURL || 'https://png.pngtree.com/element_our/png_detail/20181229/vector-users-icon-png_302626.jpg'} alt="" className="w-100 h-100" />
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;