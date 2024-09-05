import React, { useState } from 'react'

export default function Conditional() {

    const[count , setCount] = useState(0)
    const[name , setName] = useState("");
    const[sub , setSub] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault ()
        console.log("Success")
    }
   
    let obj = {
        name : name ,
        sub :sub
    }
    console.log(obj);

  return (
    <div>
        <h1 className='h1'>condition</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>Add</button>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <input type='text' placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
            <br />
            <input type='text' placeholder='Enter Your Subject' onChange={(e)=>setSub(e.target.value)}/>
       <br />
        <button>Submit</button>
        </form>
    </div>
  )
}
