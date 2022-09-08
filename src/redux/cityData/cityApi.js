import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCityCoords = createAsyncThunk('cityData/fetchCityData', (city) => {
    return axios
        .get(`https://api.geocodify.com/v2/geocode?api_key=aaf64b131532d9f33080988c6bd48df655a77998&q=${city}`)
        .then((res) => {
            return res.data.response.features[0].geometry.coordinates
        })
});

export const fetchWeather = createAsyncThunk('weather/fetchWeather', (coords) => {
    return axios
        .get(`https://api.weatherbit.io/v2.0/current?lat=${coords[1]}&lon=${[coords[0]]}&key=2bed74261c134e5daa728d60d7473405&include=minutely`)
        .then(response => {
            console.log(coords)
            return response.data
        })
})

export const fetchForecast = createAsyncThunk('forecast/fetchForecast', (coords) => {
    return axios
        .get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${coords[1]}&lon=${[coords[0]]}&key=2bed74261c134e5daa728d60d7473405&include=minutely`)
}).then(res => {
    console.log(res)
    return res.data
})

