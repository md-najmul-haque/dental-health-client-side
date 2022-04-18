import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.png'
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    const handleSignOut = () => {
        signOut(auth);
        navigate('/login');
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="info" variant="light">
            <Container>
                <Navbar.Brand href="Home#home">
                    <img className='logo' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#testimonials">Testimonials</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} as={Link} to="/about">About</Nav.Link>
                        {
                            user ? <Button className='text-decoration-none text-dark' onClick={handleSignOut} variant='link'>Sing Out</Button>
                                : <Nav.Link eventKey={2} as={Link} to="/login">
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;