import { createSlice } from "@reduxjs/toolkit";
const productSlice=createSlice({
    name:'product',
    initialState:{
        items:[],
        filter:''
    },
    reducers:{
        addProduct:(state,action)=>{
            const {id,name,category}=action.payload
            state.items.push({id,name,category})
        },
        setFilter:(state,action)=>{
            state.filter=action.payload
        }
    }
})
export const {addProduct,setFilter} =productSlice.actions
export default productSlice.reducer