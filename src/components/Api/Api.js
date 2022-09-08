import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const WEATHER_API = 'https://api.weatherbit.io/v2.0'
const WEATHER_KEY = '2bed74261c134e5daa728d60d7473405'

export const fetchCityCoords = createAsyncThunk('cityData/fetchCityData', (city) => {
    return axios
        .get(`https://api.geocodify.com/v2/geocode?api_key=aaf64b131532d9f33080988c6bd48df655a77998&q=${ city }`)
        .then((response) => {
            return response.data.response.features[0].geometry.coordinates
        })
});

export const fetchWeather = createAsyncThunk('weather/fetchWeather', (coords = [1, 1]) => {
    return axios
        .get(`${WEATHER_API}/current?lat=${ coords[1] }&lon=${ [coords[0]] }&key=${WEATHER_KEY}&include=minutely`)
        .then(response => {
            return response.data.data[0]
        })
})

export const fetchForecast = createAsyncThunk('forecast/fetchForecast', (coords = [1, 1]) => {
    return axios
        .get(`${WEATHER_API}/forecast/daily?lat=${ coords[1] }&lon=${ [coords[0]] }&key=${WEATHER_KEY}&include=minutely&lang=ru`)
        .then(response => {
            return response.data.data
        })
})

