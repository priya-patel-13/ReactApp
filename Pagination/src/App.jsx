import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Feature/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Redux/Home'
import Men from './Redux/Men'
import Women from './Redux/Women'
import Elec from './Redux/Elec'
import Jwellery from './Redux/Jwellery'

export default function App() {
  return (
    <div>
      
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/men' Component={Men}></Route>
            <Route path='/women' Component={Women}></Route>
            <Route path='/elec' Component={Elec}></Route>
            <Route path='/jwellery' Component={Jwellery}></Route>

          </Routes>
        </BrowserRouter>
    
      </Provider>
      
    </div>
  )
}
