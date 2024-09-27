import React, { useEffect, useState } from 'react'

export default function Crud() {

   const [name , setName] = useState("");
   const [sarname , setSarname] = useState("");
   const [city , setCity] = useState("");

   const [record , setRecord] = useState(null);
   const [editIndex , setEditIndex] = useState("");
    
   useEffect(() =>{
    let data = JSON.parse(localStorage.getItem("Student")) || [];
     setRecord(data)
   }, [])


   const handleAdd = () =>{
    let user = {id: Date.now() , name , sarname ,city}
    let  oldrecord = JSON.parse(localStorage.getItem("Student")) || []
     if(editIndex){
        let singleData = record.find((item) => item.id == editIndex);
        singleData.id = editIndex
        singleData.name = name
        singleData.sarname = sarname
        singleData.city = city
        localStorage.setItem("Student" , JSON.stringify(record))
        setEditIndex(null)

     }
     else {
        oldrecord.push(user)
        setRecord(oldrecord)
        localStorage.setItem("Student" , JSON.stringify(oldrecord))   
     }

    setName("");
    setSarname("");
    setCity("");
}
    const handleDelete = (id) =>{
        let deleteData = record.filter((item) => item.id != id);
        setRecord(deleteData)
        localStorage.setItem("Student" , JSON.stringify(deleteData));
    


    }

    const  handleEdit = (id) =>{
        let singleData = record.find((item) => item.id == id);
        setName(singleData.name)
        setSarname(singleData.sarname)
        setCity(singleData.city)
        setEditIndex(id)

    

}


  return (
    <div>
        <br/><br/><br/><br/>
        <input type="text" placeholder='Enter Name' onChange={(e) => setName (e.target.value)}  /><br/>
        <input type="text" placeholder='Enter Sarname'  onChange={(e) => setSarname (e.target.value)}/><br/>
        <input type="text" placeholder='Enter City'  onChange={(e) => setCity (e.target.value)}/><br/><br/>

        <button onClick={handleAdd}>{editIndex ? "Update" : "Add"}</button>

        <table border= '1' width="70%">
               <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>sarname</th>
                    <th>city</th>
                    <th colSpan={2}>Action</th>
                </tr>
               </thead>

               <tbody>
                {
                    record ?
                        record.map((e , i ) =>{
                            return <tr key={i} >
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.sarname}</td>
                                <td>{e.city}</td>
                                <td><button onClick={() => handleEdit(e.id)}>Edit</button>
                                <button onClick={() => handleDelete(e.id)}>Delete</button></td>
                            </tr>
                        })
                        :
                        ""
                }
               </tbody>

        </table>

    </div>
  )
}
