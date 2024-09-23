import React from 'react'

export default function Localsto() {

  localStorage.setItem("name" , "priya");
  localStorage.setItem("name1" , "vishwa");


  let data = localStorage.getItem("name")
    console.log(data);

    localStorage.removeItem("name");


    let obj = {name : "priya" , surname : "lakkad"};
    localStorage.setItem("myobj" , JSON.stringify (obj));

    let ObjData = JSON.parse (localStorage.getItem ("myobj")); 

    console.log(ObjData);
    
    
  return (
    <div>
    
    </div>
  )
}
