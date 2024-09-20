import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



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
          <h1 style={{color : "#D08126"}}>Grocery Shopping   </h1>
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
    </>
  )
}
