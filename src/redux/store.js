import { configureStore } from '@reduxjs/toolkit'
import cityReducer from './citiesSlice'
import weatherReducer from './weather/weatherSlice'
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'


export default configureStore({
    reducer: {
        weather: weatherReducer,
        cities: cityReducer,
    },

})

// middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//         thunk: {
//             extraArgument: ''
//         }
//     })
