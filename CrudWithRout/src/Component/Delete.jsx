import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Delete({ data, setData }) {

    const navigate = useNavigate();
    const [id, setId] = useState("");
    const Delete = () => {

        let deletitem = data.filter((item)=> item.id != id)
        setData(deletitem)
        navigate("/")
    }

    return (
        <div className='delete'>
          <div>
          <h1>Delete</h1>
            <input type="text" placeholder='Enter id' onChange={(e)=>setId(e.target.value)}/>
            <br />
            <button onClick={Delete} className='btn1'>Delete</button>

          </div>
      </div>
)
}
