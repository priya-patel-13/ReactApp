import React, { useEffect, useRef, useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const nameInputRef1 = useRef(null);
  const nameInputRef2 = useRef(null);
  const nameInputRef3 = useRef(null);

  useEffect(() => {
    if (nameInputRef1.current) {
      nameInputRef1.current.focus();
    }
    // console.log('Name:');
  }, [name]);

  useEffect(() => {
    if (nameInputRef2.current) {
      nameInputRef2.current.focus();
    }
    // console.log( 'Email:', mail);
  }, [mail]);

  useEffect(() => {
    if (nameInputRef3.current) {  
      nameInputRef3.current.focus();
    }
    // console.log( 'Password:', pass);
  }, [pass]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with Name: ${name}, Email: ${mail}, Password: ${pass}`);
    console.log('Name : ',name , 'Email : ' , mail , 'Password : ' , pass)
  };

  return (
    <>
      {/* <h1 id='f1'>Form</h1> */}
      <form onSubmit={handleSubmit}>
      <h1>FORM</h1><br /><br />
        <div>
          
          <label htmlFor="nameInput" id='l1'>Name:</label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameInputRef1}
          />
        </div>
        <br />
        <div>
          <label htmlFor="mailInput" id='l1'>Email:</label>
          <input
            id="mailInput"
            type="text"
            value={mail}                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            onChange={(e) => setMail(e.target.value)}
            ref={nameInputRef2}
          />
        </div>
        <br />
        <div>
          <label htmlFor="passInput" id='p1'>Password:</label>
          <input
            id="passInput"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            ref={nameInputRef3}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
        </>
    );
}
