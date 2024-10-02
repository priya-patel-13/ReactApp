import React from 'react'
import {Link , useNavigate , useParams} from 'react-router-dom'


export default function About() {
    const navigate = useNavigate();
    const param = useParams();

    const handleBtn = ()=>{
        navigate ("/" , {state:{name: "student"}})
    }

  return (
    <div>
        <h1>{param.id}</h1>
        <button onClick={handleBtn}>Go to Home</button>
         <Link to= {"/"}>Home</Link>

    </div>
  )
}
