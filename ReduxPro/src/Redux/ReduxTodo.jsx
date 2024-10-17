import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, updateData, toggleCompleted, deleteData } from '../Feature/Slice'; 

export default function ReduxTodo() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState('all'); 

  const crud = useSelector((state) => {
    
     return  state.todokey
} )

  const dispatch = useDispatch();

  const addRecord = () => {
    if (editIndex == null) {
      dispatch(addData({ id: Date.now(), name, subject, completed: false })); 
    } else {
      dispatch(updateData({ id: editIndex, name, subject }));
      setEditIndex(null);
    }
    setName('');
    setSubject('');
  };

  const deleteRecord = (id) => {
    dispatch(deleteData(id));
  };

  const editRecord = (id) => {
    let singleData = crud.student.find((item) => item.id === id);
    setName(singleData.name);
    setSubject(singleData.subject);
    setEditIndex(id);
  };

  const toggleCheckbox = (id) => {
    dispatch(toggleCompleted(id)); 
  };

  const handleFilterChange = (status) => {
    setFilter(status); 
  };

  const filteredTasks = crud.student.filter((item) => {
    if (filter === 'completed') {
      return item.completed === true;
    } else if (filter === 'pending') {
      return item.completed === false;
    }
    return true; 
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <input type="text" placeholder="Name" className='in' value={name} onChange={(e) => setName(e.target.value)}/> <br />
      <input type="text" placeholder="Subject" className='in' value={subject} onChange={(e) => setSubject(e.target.value)}/> <br />
      <button onClick={addRecord}>
        {editIndex ? 'Update Data' : 'Add Data'}
      </button>

      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('pending')}>Pending</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
      </div>

      {
      
      crud && filteredTasks.length > 0 ? 
        filteredTasks.map((e, i) => (
          <ul key={i}>
            <li>{e.id}</li>
            <li>{e.name}</li>
            <li>{e.subject}</li>
            <li>
              <input  type="checkbox" checked={e.completed} onChange={() => toggleCheckbox(e.id)} />
              {e.completed ? "completed" : "pending"}
            </li>
            <button onClick={() => editRecord(e.id)}>Edit</button>
            <button onClick={() => deleteRecord(e.id)}>Delete</button>
          </ul>
        )
      )
       :
        (
        <p>No data available</p>
      )}
    </div>
  );
}
