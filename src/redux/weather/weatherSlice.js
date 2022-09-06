import axios from "axios";
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    weather: {
        // type: '',
        // temMax: null,
        // temMin: null,
        // wind: null,
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
            // state.weather.type = action.payload.weather;
            // state.weather.temMax = action.payload.temp2m.max;
            // state.weather.temMin = action.payload.temp2m.min;
            // state.weather.wind = action.payload.wind10m_max;
            // console.log(state.weather.temMax)
            console.log(action)
            state.weather = action.payload
            console.log(state.weather)
            // state.error = ''
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            // state.loading = false
            state.weather = []
            // state.error = action.payload
        })
    }
})

export default weatherSlice.reducer
