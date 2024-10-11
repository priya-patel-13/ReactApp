import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData , deleteData } from './Feature/Todo';

export default function RdxCrud() {
  
    const [name , setName] = useState('');
    const [subject , setSubject] = useState("");

    const crud = useSelector((state) =>{
        return state.todokey
    })

    const dispatch = useDispatch();

    const addRecord = () =>{
        dispatch(addData({id: Date.now(),name,subject}))
        setName("")
        setSubject("")
    }

    const deleteRecord = (id) =>{
        dispatch(deleteData(id))
    }



  return (
    <div> 
        <h1>Redux Crud</h1>
      <br />
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /> <br/>
        <input type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} /> <br /><br />
        <button onClick={addRecord}>Add data</button>


        {
            crud ?
             crud.student.map((e, i)=>{
                return <ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.name}</li>
                    <li>{e.subject}</li>
                    <button>Edit</button>
                    <button onClick={() =>deleteRecord(e.id)}>Delete</button>
                </ul>
             })
             :
             <p>No  Data</p>

        }
    </div>
  )
}
