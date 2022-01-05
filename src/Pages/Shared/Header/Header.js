import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut}= useAuth();
    return (
        <>
        <Navbar bg="dark" variant="dark" className="text-white navigation py-0 " sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="nav-logo"><img src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/organic-food-on-board-fb-55662cbc11.jpg" className="w-100 rounded-circle" alt="" /></Navbar.Brand>
                <Navbar.Brand href="#home" className="text-warning">Organic-Mart-Grocery</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end hover">

                    <Nav.Link as={Link} to="/home">Home</Nav.Link>

                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/addProduct">AddProduct</Nav.Link>
                    {/* <Nav.Link as={Link} to="/login">Login</Nav.Link> */}


                    {
                        user.email ?
                            <div>
                                <Nav.Link onClick={logOut} variant="light">Logout</Nav.Link>
                            </div>
                            : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    
                    {user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}


                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;