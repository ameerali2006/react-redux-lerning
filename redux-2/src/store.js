import { createSlice,configureStore } from "@reduxjs/toolkit";
const initial={name:''}
const reducer=createSlice({
    name:'name',
    initialState:initial,
    reducers:{
        setName:(state,action)=>{
            state.name=action.payload
        },
        clearName:(state)=>{
            state.name=''
        }
    }

})
export const {setName,clearName}=reducer.actions
export const store=configureStore({
    reducer:{name:reducer.reducer}
})