import React, { Fragment } from "react";
import { useSearchWeather } from "../redux/weather/weatherApi";
import { WeatherView } from "../redux/weather/WeatherView";
// import { WeatherView } from "../redux/weather/WeatherView";

export const Home = () => {
    // const { data} = useSearchWeather();
    return (
        <Fragment>
            <h1>Погода</h1>
            <hr/>
            <WeatherView/>
        </Fragment>
    )
}
export default Home
