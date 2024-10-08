import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';


export default function About() {
 const navigate = useNavigate();
 const param = useParams();

 const handleBtn = () =>{
    navigate ("/" , {state: {name : ""}})
 }

  return (
    <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <NavbarBrand href="#">
                        <img src="https://graingrowerwp.themesflat.co/wp-content/themes/graingrow/images/logo.png" alt="" className='logo' />
                    </NavbarBrand>
                    <NavbarToggle aria-controls="navbarScroll" />
                    <NavbarCollapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 p-3" 
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <h1>{param.id}</h1> */}
                            {/* <Link to={"/"}  className='link'>Home</Link> */}
                            <Link to={"/About"} className='link'>About</Link>
                            <Link to={"/Services"} className='link'>Services</Link>
                            <Link to={"/Blog"} className='link'>Blog</Link>
                            <Link to={"/Gallery"} className='link'>Gallery</Link>
                            <Link to={"/Contact"} className='link'>Contact</Link>
                          
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <button onClick={handleBtn} className='handl-btn'> Go to Home</button>


        </>
  )
}
