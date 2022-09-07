import { createSlice} from "@reduxjs/toolkit";
import { fetchCityCoords, getCityCoords } from "./cityData/cityApi";
import { useSelector } from "react-redux";




const citiesSlice = createSlice({
    name: 'cities',
    initialState: [
        {id: 1, city: "Asha", weather: 'cloudy', tMax: null, tMin: null, coords: []},
        {id: 2, city: "Сочи", weather: 'cloudy', tMax: null, tMin: null, coords: []},
        {id: 3, city: "Москва", weather: 'cloudy', tMax: null, tMin: null, coords: []}
    ],
    reducers: {
        addCity: (state, action) => {

            // const coords = getCityCoords(action.payload.city)
            // console.log(coords)
            const newCity = {
                id: Date.now(),
                city: action.payload.city,
                // coords: coords,

            };
            console.log(newCity)
            state.push(newCity)
        },
        deleteCity: (state, action) => {
            return state.filter((city) => {
                return city.id !== action.payload.id
            })
        }

    }
});

export const { addCity, deleteCity } = citiesSlice.actions;
export default citiesSlice.reducer;

