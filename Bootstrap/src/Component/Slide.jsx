import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';


export default function Slide() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://groca.vedicthemes.com/catalog/view/theme/groca/image/slider-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='slide1'>
            <h5>Natural Health Care Ingredients</h5>
            <h1>Grocery Shopping   </h1>
            <h2>Save up 30% off</h2><br />
            <button className='m-1'>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://groca.vedicthemes.com/catalog/view/theme/groca/image/slider-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className='slide1'>
            <h5>Natural Health Care Ingredients</h5>
            <h1 style={{ color: "#D08126" }}>Grocery Shopping   </h1>
            <h2>Save up 30% off</h2><br />
            <button className='m-1'>Shop Now</button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://groca.vedicthemes.com/catalog/view/theme/groca/image/slider-2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className='slide2'>
            <h5>Natural Health Care Ingredients</h5>
            <h1>Grocery Shopping   </h1>
            <h2>Save up 30% off</h2><br />
            <button>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <center>
        <Container fluid="md" className='c1 p-1 m-5'>
          <Row>
            <Col>latest news

              <p>Est ante in nibh mauris cursus donec enim diam</p>
            </Col>
          </Row>
        </Container>
      </center>

      <center>
        <CardGroup className='card'>
          <Card className='p-3'>
            <Card.Img variant="top" src="https://groca.myshopify.com/cdn/shop/articles/blog-1_49ce4b16-fb0a-488e-a203-3a1a84091ced.jpg?v=1580990429&width=1500" />
            <Card.Body>
              <Card.Title className='card-title'>Best In Quality Fresh Meat & Seafood</Card.Title>
              <Card.Text className='card-text'>
                Turpis nunc eget lorem dolor. Pretium <br /> quam vulputate dignissim suspendisse in <br /> est ante. Varius duis at consectetur lorem <br /> donec. Praesent semper feugiat nibh sed <br /> pulvinar proin. Suspendisse faucibus <br /> interdum posuere...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button>Read More</button>

            </Card.Footer>
          </Card>
          <Card className='p-3'>
            <Card.Img variant="top" src="https://groca.myshopify.com/cdn/shop/articles/blog-2.jpg?v=1580990472&width=1500" />
            <Card.Body>
              <Card.Title>Best Way To Eat Dry Fruits And Nuts</Card.Title>
              <Card.Text className='card-text'>
                Nunc id cursus metus aliquam eleifend mi <br /> in nulla. Aliquam sem et tortor consequat. <br /> Arcu odio ut sem nulla. Pharetra magna ac <br /> placerat vestibulum. Potenti nullam ac <br /> tortor vitae purus...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button>Read More</button>
            </Card.Footer>
          </Card>
          <Card className='p-3'>
            <Card.Img variant="top" src="https://groca.myshopify.com/cdn/shop/articles/blog-3.jpg?v=1580990493&width=1500" />
            <Card.Body>
              <Card.Title>Fruits & Vegetable Nutrients For Your Health</Card.Title>
              <Card.Text className='card-text'>
                Dolor sit amet consectetur adip elit. Nulla <br /> malesuada pellentesque elit eget gravida <br /> cum sociis. Integer vitae justo eget magna <br /> fermentum iaculis eu. Enim ut tellus <br /> elementum sagittis vitae et. Tellus <br /> molestie...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button>Read More</button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </center>
       

       
    
      <Row className='r1'>
        <Col sm={8}></Col>
        <Col sm={4}>
        return <Image src=""  />;
        </Col>
      </Row>
     

    </>
  )
}
