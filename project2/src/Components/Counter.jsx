import React from 'react'
import { useState } from 'react'

export default function Counter() {
   
    const [count , setCount] = useState(0)

    const increase = () =>{
        setCount(count +1)
         
       
    }
    const decrease = () =>{
        setCount(count -1)
    }

    const reset = () =>{
        setCount(0)
    }




  return (
    <center>
    <div className='main'>
       
            <h1>Counter</h1>
            <h2>{count}</h2>

            <div className="btnbox">

            <button onClick={increase } className='btn'>Inc</button>
            <button onClick={decrease } className='btn'>Dnc</button>
            <button onClick={reset} className='btn'>Reset</button>
      

            </div>
    </div>
    </center>
  )
}
