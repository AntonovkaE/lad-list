import axios from "axios";
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    weather: {
    },
}

export const fetchWeather = createAsyncThunk('weather/fetchWeather', () => {
    return axios
        .get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json')
        .then(response => response.data.dataseries[0])
})

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchWeather.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.weather = action.payload
            // state.error = ''
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false
            state.weather = []
            // state.error = action.payload
        })
    }
})

export default weatherSlice.reducer
