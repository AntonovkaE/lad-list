import { createSlice} from "@reduxjs/toolkit";
import { fetchCityCoords } from "./cityData/cityApi";


const citiesSlice = createSlice({
    name: 'cities',
    initialState: [
    ],
    reducers: {
        showWeather: (state, action) => {
            const newCity = {
                id: Date.now(),
                city: action.payload.city,
            };
            state.push(newCity)
        },
    },
});

export const { addCity } = citiesSlice.actions;
export default citiesSlice.reducer;

