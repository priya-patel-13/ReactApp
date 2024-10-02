import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Blog from './Component/Blog'
import Gallery from './Component/Gallery'
import Contact from './Component/Contact'
import Services from './Component/Services';

export default function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path='/' element = {<Home></Home>}></Route>
          <Route path='/About/:id' element = {<About></About>}></Route>
          <Route path='/Blog' element = {<Blog></Blog>}></Route>
          <Route path='/Gallery' element = {<Gallery></Gallery>}></Route>
          <Route path='/Contact' element = {<Contact></Contact>}></Route>
          <Route path='/Services' element = {<Services></Services>}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
}
