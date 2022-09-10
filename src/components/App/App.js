import { Route, Routes } from 'react-router-dom';
import ImageGallery from "../../pages/ImageGallery";
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
            <main className="container pt-5">
                <Routes>
                    <Route path="/" element={ <Forecast onShowWeather={handleShowWeatherClick} /> }>
                    </Route>
                    <Route path="/foto" element={ <ImageGallery/> }>
                    </Route>
                </Routes>
                <WeatherPopup isOpen={ isWeatherPopupOpen } onClose={ closeAllPopups }/>
            </main>
        </div>
    )
}

export default App;
