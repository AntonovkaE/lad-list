import { Route, Routes } from 'react-router-dom';
import Articles from "../../pages/Articles";
import Forecast from "../../pages/Forecast";
import { Navbar } from "../Navbar/Navbar";
import WeatherPopup from "../WeatherPopup/WeatherPopup";
import { useState } from "react";
import './App.css'

function App() {
    const [isWeatherPopupOpen, setIsWeatherPopupOpen] = useState(false)
    const closeAllPopups = () => {
        setIsWeatherPopupOpen(false)
    }
    const handleShowWeatherClick = () => {
        setIsWeatherPopupOpen(!isWeatherPopupOpen)
    }

    return (
        <div className="page container">
            <Navbar />
            <div className="container pt-5">
                <Routes>
                    <Route path="/" element={ <Forecast onShowWeather={handleShowWeatherClick} /> }>
                    </Route>
                    <Route path="/info" element={ <Articles/> }>
                    </Route>
                </Routes>
                <WeatherPopup isOpen={ isWeatherPopupOpen } onClose={ closeAllPopups }/>
            </div>
        </div>
    )
}

export default App;
