import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Firebash/Login'
import Dashboard from './Firebash/Dashboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter>

</div>
  )
}
