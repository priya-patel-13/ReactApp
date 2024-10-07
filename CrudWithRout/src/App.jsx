import React, { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Component/Home'
import Create from './Component/Create'
import Update from './Component/Update'
import Delete from './Component/Delete'

export default function App() {
  
  const [data , setData] = useState(
    [
      {   id: 1 , name : "Priya" , subject :"React"},
      {   id: 2 , name : "Vishva" , subject :"Node"},
    ]    
)
  return (
    <div>
     
      <BrowserRouter>
         <Routes>
          <Route path = '/' element = {<Home data={data}/>}></Route>
          <Route path = '/create' element = {<Create data={data} setData={setData}/>}></Route>
          <Route path = '/delete' element = {<Delete data={data}setData={setData}/>}></Route>
          <Route path = '/update' element = {<Update data={data} setData={setData}/>}></Route>
         </Routes>
      </BrowserRouter>

    </div>
  )
}
