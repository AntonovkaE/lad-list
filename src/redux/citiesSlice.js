import { createSlice} from "@reduxjs/toolkit";

const citiesSlice = createSlice({
    name: 'cities',
    initialState: [
        {id: 1, city: "Asha"},
        {id: 2, city: "Сочи"},
        {id: 1, city: "Москва"}
    ],
    reducers: {
        addCity: (state, action) => {
            const newCity = {
                id: Date.now(),
                title: action.payload.title
            };
            state.push(newCity)
        },
        deleteCity: (state, action) => {
            restate.filter((city) => {
                return city.id !== action.payload.id
            })
        }

    }
});

export const { addCity, deleteCity } = citiesSlice.actions;
export default citiesSlice.reducer;

