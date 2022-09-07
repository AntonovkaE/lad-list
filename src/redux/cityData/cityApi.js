import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


// const instance = axios.create({
//     baseURL: 'https://api.geocodify.com/v2/geocode?api_key=aaf64b131532d9f33080988c6bd48df655a77998&q=',
// });

export const fetchCityCoords = createAsyncThunk('cityData/fetchCityData', (city) => {
    return axios
        .get(`https://api.geocodify.com/v2/geocode?api_key=aaf64b131532d9f33080988c6bd48df655a77998&q=${city}`)
        .then((res) => {
            return res.data.response.features[0].geometry.coordinates
        })
});

// export const getCityCoords = () => {
//     return axios
//         .get(`https://api.geocodify.com/v2/geocode?api_key=aaf64b131532d9f33080988c6bd48df655a77998&q=ufa`)
//         .then((res) => res.data.response.features[0].geometry.coordinates)
// }
//
// console.log(getCityCoords())
