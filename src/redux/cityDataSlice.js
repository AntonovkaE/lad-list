import { createSlice } from '@reduxjs/toolkit';
import { fetchCitiesWeather, fetchCityCoords, fetchForecast } from '../components/Api/Api';

const initialState = {
  citiesWithCoords: [],
  loading: true,
  coords: [0, 0],
  weather: {},
  forecast: {},
  city: '',
  country: '',
  error: '',
  citiesWithWeather: [],
};

const cityDataSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    showWeather: (state, action) => {
      state.city = action.payload.city;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCityCoords.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCityCoords.fulfilled, (state, action) => {
      state.loading = false;
      state.coords = action.payload.geometry.coordinates;
      state.city = action.payload.properties.name;
      state.country = action.payload.properties.country;
      state.error = '';
    });
    builder.addCase(fetchCityCoords.rejected, (state, action) => {
      state.loading = false;
      state.coords = [];
      state.error = action.payload;
    });
    builder.addCase(fetchForecast.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.loading = false;
      state.forecast = action.payload;
      state.forecast.length = 8;
      state.error = '';
    });
    builder.addCase(fetchForecast.rejected, (state, action) => {
      state.loading = false;
      state.forecast = {};
      state.error = action.payload;
    });
    builder.addCase(fetchCitiesWeather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCitiesWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.citiesWithWeather = action.payload;
      state.error = '';
    });
    builder.addCase(fetchCitiesWeather.rejected, (state, action) => {
      state.loading = false;
      state.citiesWithWeather = [];
      state.error = action.payload;
    });
  },
});

export const { showWeather } = cityDataSlice.actions;

export default cityDataSlice.reducer;
