import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todokey',
  initialState: {
    student: []
  },
  reducers: {
    addData: (state, action) => {
      state.student.push(action.payload);
    },
    updateData: (state, action) => {
      state.student.map((e,i)=>{
        if(e.id == action.payload.id){
          e.name = action.payload.name
          e.subject = action.payload.subject 
        }
        else{
          e
        }
      })
      
    },
    deleteData: (state, action) => {
      state.student = state.student.filter((item) => item.id !== action.payload);

    },
      
    toggleCompleted: (state, action) => {
      const existingData = state.student.find((item) => item.id === action.payload);
      if (existingData) {
        existingData.completed = !existingData.completed; 
      }
    }
  }
});

export const { addData, updateData, deleteData, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
