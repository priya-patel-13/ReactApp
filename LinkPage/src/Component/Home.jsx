import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import { FormControl, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';

export default function Home() {
    let data = "123-456-789";
    let location = useLocation();
    return (
        <>
        
            <Navbar expand="lg">
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
                            {
                                location.name && <h1>{location.state.name}</h1>
                            }
                            <Link to={`/About/${data}`} className='link'>About</Link>
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
           
           <div className="slide">
           <Carousel data-bs-theme="light">
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://graingrowerwp.themesflat.co/wp-content/uploads/2022/11/bg-sl.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <center>
            <h1 className='m-2 p-5'>High Quality Fresh <br /> Organic Products.</h1>
            <p className='m-2 p-2'>25 years of experience in agriculture farming.</p>
        </center>
                </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img2"
          src="https://graingrowerwp.themesflat.co/wp-content/uploads/2022/11/Water-Management.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <center>
            <h1 className='m-5 p-1'>High Quality Fresh <br /> Organic Products.</h1>
            <p className='m-5 p-2'>25 years of experience in agriculture farming.</p>
        </center>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
           </div>

        </>
    )
}
