import {createSlice,configureStore} from '@reduxjs/toolkit';
const initial={count:0}

const counterSlice=createSlice({
    name:'counter',
    initialState:initial,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        }

    }
})

export const {increment,decrement,reset} =counterSlice.actions
export const store=configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})