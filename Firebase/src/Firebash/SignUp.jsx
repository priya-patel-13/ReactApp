import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const[email , setEmail] = useState("");
    const [password , setPassword] = useState("");


    const navigate = useNavigate()

    const signup =async ()=>{
       let user = await createUserWithEmailAndPassword(auth , email , password);
       console.log(user)
  
    
    if (user){
        navigate ('/dashboard')
    }
}

  return (
    <div>
        <h1>SignUp</h1>

        <input type="text" placeholder='Enter your Email ' onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='Enter your Password ' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={signup}>Sing Up</button>
        <Link to={"/signin"}>SignIn ?</Link>
    </div>
  )
}
