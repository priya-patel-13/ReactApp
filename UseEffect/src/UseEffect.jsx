import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function UseEffect() {
  
    const [count , setCount] = useState(0)

    useEffect(()=>{
        console.log("use effect running")
    }), [count]


  return (
   <div>
    <p>{count}</p>
    <button onClick={()=> setCount (count +1)}>Add</button>
   </div>
  )
}
