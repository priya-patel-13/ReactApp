import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate()

    const signin =async ()=>{
        let user = await signInWithEmailAndPassword(auth , email , password);
        console.log(user)
       
    if (user){
        navigate ('/dashboard')
    }
    }

  return (
    <div>
        <h1>Sign In</h1>

        <input type="text" placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={signin}>Sign In</button>

    </div>
  )
}
