import { Route, Routes } from 'react-router-dom';
import Coords from '../../pages/Coords';
import Forecast from '../../pages/Forecast';
import { Navbar } from '../Navbar/Navbar';
import WeatherPopup from '../WeatherPopup/WeatherPopup';
import { useState } from 'react';
import './App.css';
import { Footer } from '../Footer/Footer';
import { showWeather } from '../../redux/cityDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityCoords } from '../Api/Api';

function App() {
  const [isWeatherPopupOpen, setIsWeatherPopupOpen] = useState(false);

  const closeAllPopups = () => {
    setIsWeatherPopupOpen(false);
  };
  const dispatch = useDispatch();
  const handleShowWeatherClick = (city) => {
    dispatch(showWeather({
      city: city,
    }));
    setIsWeatherPopupOpen(!isWeatherPopupOpen);
  };
  const data = useSelector((state) => state.city);

  const handleGetCoords = (city) => {
    dispatch(fetchCityCoords(city))

  };

  return (
    <div className="page container">
      <Navbar/>
      <main className="container pt-5">
        <Routes>
          <Route path="/" element={ <Forecast onShowWeather={ handleShowWeatherClick }/> }>
          </Route>
          <Route path="/coords" element={ <Coords onSubmit={handleGetCoords}/> }>
          </Route>
        </Routes>
        <WeatherPopup isOpen={ isWeatherPopupOpen } onClose={ closeAllPopups }/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
