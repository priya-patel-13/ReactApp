import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({data}) {
  return (
    <div className='home'>
      <h1>HOME</h1>
     <table border="1"   width="50%">

        <thead >
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>
            {
                data && 
                data.map((e , i)=>{
                    return <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.subject}</td>

                    </tr>
                })
                
            }
        </tbody>

     </table>
     <button>
        
        <Link to={"/create"} className='links' >Create</Link>
        <Link to={"/delete"} className='links'>delete</Link>
        <Link to={"/update"} className='links'>update</Link>
   
         </button>
    </div>
  )
}
