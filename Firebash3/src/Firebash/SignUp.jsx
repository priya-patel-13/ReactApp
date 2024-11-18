import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../../Confige'
import { doc, setDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css';

export default function Signup() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [pass , setPass] = useState('')
    const [city , setCity] = useState('')
    const [hobby , setHobby] = useState('')

    const navigate = useNavigate()

    const handlesignup = ()=>{
        createUserWithEmailAndPassword(auth , email , pass)
        .then(data=>{
            setDoc(doc(db,"users",data.user.uid),{
                name , email , city , hobby
            })
            console.log("added");
            navigate("/dashboard");
        })
    }

  return (
    <div>
        <div className="main">     
               <h1>Signup</h1> 
        <input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/> 
        <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/> 
        <input type="text" placeholder='Enter Pass' onChange={(e)=>setPass(e.target.value)}/> 
        <input type="text" placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}/> 
        <input type="text" placeholder='Enter Hobby' onChange={(e)=>setHobby(e.target.value)}/> <br />
        <button onClick={handlesignup}>Sign Up</button> 
        <button>
        <Link to={"/signin"}>Sign In</Link>
        </button>
        </div>

    </div>
  )
}
