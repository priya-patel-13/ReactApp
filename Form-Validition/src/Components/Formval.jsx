import React, { useState } from 'react'

export default function Formval() {
   
    const [name , setName] = useState("");
    const [phone , setPhone] = useState("");
    const [email , setEmail] = useState("");
    const [address , setAddress] = useState("");
    const [category , setCategory] = useState("");
  
    const [nameErr , setNameErr] = useState("");
    const [emialErr , setEmailErr] = useState("");
    const [phoneErr , setPhoneErr] = useState("");
    const [addressErr , setAddressErr] = useState("");
    


    
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!name){
            setNameErr("Name Required");
        }
        else{
            setNameErr("");
        }
       
        if(!address){
            setAddressErr("Address Required");
        }
        else{
            setAddressErr("");
        }

        if(!phone){
            setPhoneErr("Dail Required");
        }
        else{
            setPhoneErr("");
        }
       
        if(!email){
            setEmailErr("Email Required");
        }
        else if (!email.includes("@")){
            setEmailErr("Email is not valid")
        }
        else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
            setEmailErr("Somethinges missing")
        }
       
        else {
            setEmailErr("")
        }

        
    }

  return (
    <div>
          <h1>FormValidition</h1><br />
      <form onSubmit={(e) =>handleSubmit(e)}>
       <br />  <label htmlFor="">Name</label><br /><br />
        <input type="text" placeholder='Enter Your Name' onChange={(e)=> setName(e.target.value)}  />
        <span>{nameErr}</span><br /><br />

        <label htmlFor="">Phone</label><br /><br />
        <input type="text" placeholder='Enter Your Dail' onChange={(e)=> setPhone(e.target.value)}  />
        <span>{phoneErr}</span><br /><br />


        <label htmlFor="">Email</label><br /><br />
        <input type="email" placeholder='Enter Your Email' onChange={(e)=> setEmail(e.target.value)}  />
        <span>{emialErr}</span><br />
        <br />
    
        <label htmlFor="">Address</label><br /><br />
        <input type="text" placeholder='Enter Your Address' onChange={(e)=> setAddress(e.target.value)}  />
        <span>{addressErr}</span><br /><br />

        <button type='submit'>Submit</button>
        <br /><br />
        <select name="" id="" onChange={(e) => setCategory(e.target.value)}>

            <option value="">Category</option>
            <option value="electric">Electric</option>
            <option value="clothing">Clothing</option>
        </select>
         {
            category == "electric" && <input type='text' placeholder='Enter Warranty'/>
         
         }
         {
               category == "clothing" && <input type='text' placeholder='Enter return period'/>
         }

        
      
      </form>
    </div>
  )
}
