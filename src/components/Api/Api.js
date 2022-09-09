import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const WEATHER_API = 'https://api.weatherbit.io/v2.0'
const WEATHER_KEY = '2bed74261c134e5daa728d60d7473405'

export const fetchCityCoords = createAsyncThunk('cityData/fetchCityData', (city) => {
    return axios
        .get(`https://api.geocodify.com/v2/geocode?api_key=aaf64b131532d9f33080988c6bd48df655a77998&q=${ city }&lang=ru`)
        .then((response) => {
            console.log(response.data)
            return response.data.response.features[0]
        })
});

export const fetchForecast = createAsyncThunk('forecast/fetchForecast', ([lon= 0, lat= 0]) => {
    return axios
        .get(`${WEATHER_API}/forecast/daily?lat=${ lat}&lon=${ [lon] }&key=${WEATHER_KEY}&include=minutely&lang=ru`)
        .then(response => {
            console.log(lon,lat)
            return response.data.data
        })
})

export const fetchWeatherMap = createAsyncThunk('weatherMap/fetchWeatherMap', ([lon= 0, lat= 0]) => {
    return axios
        .get(`https://maps.weatherbit.io/v2.0/singleband/fullsat/latest/6/45/45.png?key=${WEATHER_KEY}`)
        .then(response => {
            console.log(response)
            return response
        })
})

