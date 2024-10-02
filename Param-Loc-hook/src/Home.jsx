import React from 'react'
import {Link , useLocation ,} from 'react-router-dom'
export default function Home() {
   
    let data = "039562145";
    let location = useLocation()

  return (
    <div> 
        <h1>Home</h1>
        <h1>{location.state.name}</h1>
        <Link to= {`/About/${data}`}>About</Link>
    </div>
  )
}
