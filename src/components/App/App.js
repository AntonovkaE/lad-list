import { Route, Routes } from 'react-router-dom';
import Home from "../../pages/Home";
import About from "../../pages/About";
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
                    <Route path="/about" element={ <About onShowWeather={handleShowWeatherClick} /> }>
                    </Route>
                    <Route path="/" element={ <Home/> }>
                    </Route>
                </Routes>
                <WeatherPopup isOpen={ isWeatherPopupOpen } onClose={ closeAllPopups }/>
            </div>
        </div>
    )
}

export default App;
