import React, { useState } from 'react'

export default function Hooks() {
    const [count , setCount] = useState(0)

    const increase = () =>{
        setCount(count +1)
         
       
    }
    const decrease = () =>{
        setCount(count -1)
    }

    const [name , setName] = useState( "Priya")
    const [arr , setArr] = useState([1,2,3]);

    const [obj , setObj] = useState({name : "Vishva" , subject : "React" })

    const[arrobj , setArrObj] = useState([{name : "Mahi" , subject : "Node" },{ name : "Ruhi" ,  subject :"Java"}])
  return (
    <div>
       <h1>Hooks</h1>
       <h1 >{count}</h1>
       <button onClick={increase} id='b1'>Increase</button>&nbsp;&nbsp;
       <button onClick={decrease} id='b2'>decrease</button>
       <p className='p1'>{name}</p>
       <p className='p2'>{obj.name}</p>
       <p className='p3'>{obj.subject}</p>
      

        {
       arr.map((e , i) => {
        return <p key = {i} id='a'> {e}</p>

       })

}

     {
          arrobj.map((e ,i) =>{
            return <ul key = {i} id='s'>
               <li>{e.name}</li>
               <li>{e.subject}</li>
            </ul>
          })
     }

    </div>
  )
     
      

}
