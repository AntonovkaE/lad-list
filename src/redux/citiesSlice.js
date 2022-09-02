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
        // toggleComplete: (state, action) => {
        //     const index = state.findIndex((city) => city.id === action.payload.id)
        //     state[index].completed = action.payload.completed;
        // }
    }
});

export const { addCity } = citiesSlice.actions;
export default citiesSlice.reducer;

