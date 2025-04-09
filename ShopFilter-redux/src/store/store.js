import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import ProductReducer from './productSlice'
import ThemeReducer from './themeSlice'
const rootReducer=combineReducers({
    product:ProductReducer,
    theme:ThemeReducer
})
export const store =configureStore({
    reducer:rootReducer
})