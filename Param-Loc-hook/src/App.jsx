import React from 'react'
import Home from './Component/Home'
import About from './Component/About'
import {BrowserRouter , Routes , Route} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home/>}> </Route>
          <Route path = '/About/:id' element = {<About/>}> </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}
