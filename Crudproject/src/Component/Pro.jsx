import React, { useEffect, useState } from 'react'

export default function Pro() {

    const [task, setTask] = useState("");
    const [record, setRecord] = useState("");
    const [editIndex , setEditIndex] = useState("");
    const [com , setCom] = useState("");

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Task")) || []
        setRecord(data)
    }, [])

    const Addtask = () => {

        let Task = {
            id: Date.now(),
            task
        }
        console.log(Task);


        let Record = JSON.parse(localStorage.getItem("Task")) || []
       
        if (editIndex)
        {
          let data = record.find((el) => el.id == editIndex)
          data.id = editIndex
          data.task = task

          localStorage.setItem("Task" , JSON.stringify(record))
          setEditIndex(null)
        }
        else{
            
        Record.push(Task)

        setRecord(Record)

        localStorage.setItem("Task", JSON.stringify(Record))
        }
        setTask("")

    }

    const Delete = (id) =>{
        let data = record.filter((el) => el.id != id)
        setRecord(data)
        localStorage.setItem("Task" , JSON.stringify(data))

    }

    const Edit = (id)=>{
        let data = record.find((el) => el.id == id)
        setTask(data.task)
        setEditIndex(id)
        
    }
     
    const Com = (id) =>{
        let data = record.find((el) => el.id == id)
        setCom(data)

        alert (`The Task is : ${data.task}`)
    }


    return (
        <div>
    
          <h1>Task Manager</h1>

            <input type="text" value={task} placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
            <button onClick={Addtask} id='add'><i class="fa-solid fa-plus"></i></button>

            <div className='main'>
                <p>
                    {
                        record ?
                            record.map((e) => {
                                return <div className='div1'>
                                    <p>{e.task}</p>
                                    <button onClick={() => Edit(e.id)} id='b1'>
                                    <i class="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button onClick={() => Com (e.id)} id='b2' >
                                    <i class="fa-regular fa-circle-check"></i>
                                    </button>
                                    <button onClick={() => Delete(e.id)} id='b3'>
                                    <i class="fa-regular fa-trash-can"></i>
                                    </button>
                                </div>
                            })
                            :
                            "Enter Task"
                    }

                </p>

            </div>


        </div>
    )
}
