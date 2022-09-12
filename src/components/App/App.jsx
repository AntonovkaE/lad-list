import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showWeather } from '../../redux/cityDataSlice';
import Coords from '../../pages/Coords';
import Forecast from '../../pages/Forecast';
import { Navbar } from '../Navbar/Navbar';
import WeatherPopup from '../WeatherPopup/WeatherPopup';
import './App.css';
import Footer from '../Footer/Footer';
import { fetchCityCoords } from '../Api/Api';

function App() {
  const [isWeatherPopupOpen, setIsWeatherPopupOpen] = useState(false);

  const closeAllPopups = () => {
    setIsWeatherPopupOpen(false);
  };
  const dispatch = useDispatch();
  const handleShowWeatherClick = (city) => {
    dispatch(showWeather({
      city,
    }));
    setIsWeatherPopupOpen(!isWeatherPopupOpen);
  };
  const handleGetCoords = (city) => {
    dispatch(fetchCityCoords(city));
  };
  return (
    <div className="page container">
      <Navbar />
      <main className="container pt-5">
        <Routes>
          <Route path="/" element={<Forecast onShowWeather={handleShowWeatherClick} />} />
          <Route path="/coords" element={<Coords onSubmit={handleGetCoords} />} />
          <Route
            exact
            path="*"
            element={<Navigate replace to="/" />}
          />
        </Routes>
        <WeatherPopup isOpen={isWeatherPopupOpen} onClose={closeAllPopups} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
