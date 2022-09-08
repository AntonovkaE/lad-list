import React from 'react';
import Popup from "../Popup/Popup";
function WeatherPopup({isOpen, onClose}) {
    return (
        <Popup isOpen={isOpen} onClose={onClose} name="weather">
            <h2>weather</h2>
        </Popup>
    );
}

export default WeatherPopup;

