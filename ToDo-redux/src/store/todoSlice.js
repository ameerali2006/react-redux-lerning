import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
            state.push({id:Date.now(),task:action.payload})
        },
        deleteTask:(state,action)=>{
            
            return state.filter((todo)=>todo.id!==action.payload)
            
        },
        editTask:(state,action)=>{
            const {id,newTask}=action.payload;
            const toedit=state.find((t)=>t.id==id)
            if(toedit){
                toedit.task=newTask
            }
        },
        reset:()=>[]

    }
})
export const {addTask,deleteTask,reset,editTask}=todoSlice.actions
export default todoSlice.reducer
