import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Firebash/SignIn'
import SignUp from './Firebash/SignUp'
import Dashboard from './Firebash/Dashboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp}>SignUp</Route>
          <Route path='/SignIn' Component={SignIn}></Route>
          <Route path='/Dashboard' Component={Dashboard}>Dashboard</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
