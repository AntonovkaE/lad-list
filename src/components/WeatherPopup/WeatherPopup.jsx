import React from 'react';
import Popup from "../Popup/Popup";
import City from "../City/City";
import { useSelector } from "react-redux";
import {windImg, stormImg, sunImg, snowImg, rainImg, fogImg, cloudsImg} from '../../utils/constance'

function WeatherPopup({ isOpen, onClose }) {
    const data = useSelector((state) => state.city);
    const code = data.forecast[0] ? data.forecast[0].weather.code : 200 ;
    let background = ((code < 234) ? stormImg :
        (code <= 302 ) ? snowImg :
            (code <= 511) ? rainImg :
                (code <= 610 || (code > 612 && code <= 623  )) ? snowImg :
                    (code <= 612) ? windImg :
                        (code < 751) ? fogImg :
                            (code === 800 ) ? sunImg : cloudsImg);
    return (
        <Popup isOpen={ isOpen } onClose={ onClose } name="weather" background={background}>

            <h2>{ `${data.city}, ${data.country}` }</h2>

            <City city={ data.city } days={8}/>
        </Popup>
    );
}

export default WeatherPopup;

