import React, { useEffect, useState } from 'react'

export default function ApiWithFetch() {
     const [data , setData] = useState("");
    useEffect(()=>{
       fetchApi()
    }, [])

    const fetchApi = async ()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response);
        const res = await response.json();
        console.log(res);
        setData(res)
        
        
    }

  return (
 
          <div>
        <h1>ApiWithFetch</h1>
        {
            data && 
            data.map((e,i) =>{
                return  <center> <ul key={i}>
   
                   <li>{e.id}</li>
                   <li>{e.title}</li>
                   <li>{e.price}</li>
                   <li>{e.description}</li>
                    <li>{e.category}</li>

                </ul></center>
            })
        }
    </div>


  )
}
