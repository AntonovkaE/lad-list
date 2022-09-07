import { createSlice } from "@reduxjs/toolkit";
import { fetchCityCoords } from "./cityApi";

const initialState = {
    loading: true,
    coords: [],
}

const geocodingSlice = createSlice({
    name: 'coords',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchCityCoords.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCityCoords.fulfilled, (state, action) => {
            state.loading = false;
            state.coords = action.payload
            console.log(state.coords)
            // state.error = ''
        })
        builder.addCase(fetchCityCoords.rejected, (state, action) => {
            state.loading = false
            state.coords = []
            // state.error = action.payload
        })
    }
})

export default geocodingSlice.reducer

