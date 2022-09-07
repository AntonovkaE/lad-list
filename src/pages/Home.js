import React, { Fragment } from "react";
import { WeatherView } from "../redux/weather/WeatherView";
import { CityView } from "../redux/cityData/CityView"

export const Home = () => {
    return (
        <Fragment>
            <h1>Погода</h1>
            <hr/>
            <WeatherView/>
            {/*<CityView/>*/}
        </Fragment>
    )
}
export default Home
