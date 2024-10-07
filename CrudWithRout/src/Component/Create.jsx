import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({ data, setData }) {

  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")

  const submit = () => {
    let obj = {
      id: data.length + 1,
      name: name,
      subject: subject
    };
    setData([...data, obj])
    navigate("/")
  }

  return (
    <div className='create'>
      <h1>Create</h1>
      <br />
      <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
      <br /><br />
      <input type="text" placeholder='Enter subject' onChange={(e) => setSubject(e.target.value)} />
      <br />
      <button onClick={submit} className='btn1'>Submit</button>

    </div>
  )
}
