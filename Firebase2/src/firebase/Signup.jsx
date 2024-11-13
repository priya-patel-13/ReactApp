import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db  } from '../../firebaseConfige'
import { doc, setDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

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
               <h1>Signup</h1> <br /><br />
        <input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/> <br />
        <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/> <br />
        <input type="text" placeholder='Enter Pass' onChange={(e)=>setPass(e.target.value)}/> <br />
        <input type="text" placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}/> <br />
        <input type="text" placeholder='Enter Hobby' onChange={(e)=>setHobby(e.target.value)}/> <br />
        <button onClick={handlesignup}>Sighn Up</button> 
        <Link to={"/signin"}>Sign In</Link>
        </div>

    </div>
  )
}
