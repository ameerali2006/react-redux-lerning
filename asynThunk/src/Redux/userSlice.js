import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchUser=createAsyncThunk('users/fetchUser',async ()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})
const userSlice=createSlice({
    name:'users',
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    extraReducers:(build)=>{
        build.addCase(fetchUser.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.users=action.payload
            state.loading=false
        })
        .addCase(fetchUser.rejected,(state)=>{
            state.error='fail to fetch data'
            state.loading=false
        })
    }
})
export default userSlice.reducer