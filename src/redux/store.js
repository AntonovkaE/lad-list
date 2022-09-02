import { configureStore } from '@reduxjs/toolkit'
import cityReducer from './citiesSlice'

export default configureStore({
    reducer: {
        cities: cityReducer,
    }
})

