import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';


export default function Services() {
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
                            <Link to={"/"}  className='link'>Home</Link>
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
        
         <div className="sec">
         <Container>
      <Row>
        <Col>
        <center>
        <img src="https://graingrowerwp.themesflat.co/wp-content/uploads/2022/11/img_Fresh-Vegetables.jpg" alt="" className='m-5 p-2' />

        </center>
        
        </Col>
      </Row>

      <Row>
        <Col>
            <h1 className='m-3 p-2'>Fresh Vegetables</h1>
        </Col>
      </Row>
    </Container>


         </div>

        </>
  )
}
