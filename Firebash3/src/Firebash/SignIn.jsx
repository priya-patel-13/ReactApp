import React, { useState } from 'react'
import { auth } from '../../Confige'
import { Link,  useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'


export default function Signin() {

    const [email , serEmail] = useState("")
    const [pass , serPass] = useState("")

    const navigate = useNavigate()

    const handleclick = ()=>{
        signInWithEmailAndPassword(auth , email , pass)
        .then(users=>{
            navigate("/dashboard")
        })
    }
  return (
    <div>
        <h1>Signin</h1>

        <input type="text" placeholder='Enter email' onChange={(e)=>serEmail(e.target.value)}/>
        <input type="text" placeholder='Enter pass' onChange={(e)=>serPass(e.target.value)}/>
        <button onClick={handleclick}>Signin</button>
        <Link to={"/"}>Sign Up</Link>
    </div>
  )
}
