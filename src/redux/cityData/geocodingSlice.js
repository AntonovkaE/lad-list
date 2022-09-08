import { createSlice } from "@reduxjs/toolkit";
import { fetchCityCoords, fetchForecast } from "./cityApi";
import { fetchWeather} from "./cityApi";

const initialState = {
    loading: true,
    coords: [],
    weather: {
    },
    forecast: {},
    city: '',

}

const geocodingSlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        showWeather: (state, action) => {
            state.city = action.payload.city
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchCityCoords.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCityCoords.fulfilled, (state, action) => {
            state.loading = false;
            state.coords = action.payload

            console.log(state.coords)
            // state.error = ''
        })
        builder.addCase(fetchCityCoords.rejected, (state, action) => {
            state.loading = false
            state.coords = []
            // state.error = action.payload
        })
        builder.addCase(fetchWeather.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.weather = action.payload
            // state.error = ''
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false
            state.weather = []
            // state.error = action.payload
        })
        builder.addCase(fetchForecast.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchForecast.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.weather = action.payload
            // state.error = ''
        })
        builder.addCase(fetchForecast.rejected, (state, action) => {
            state.loading = false
            state.weather = []
            // state.error = action.payload
        })
    }
})

export const { showWeather } = geocodingSlice.actions;

export default geocodingSlice.reducer

