import { configureStore } from '@reduxjs/toolkit'
import cityReducer from './citiesSlice'
import weatherReducer from './weather/weatherSlice'
import geocodingReducer from "./cityData/geocodingSlice";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'


export default configureStore({
    reducer: {
        city: geocodingReducer,
    },

})

// middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//         thunk: {
//             extraArgument: ''
//         }
//     })
