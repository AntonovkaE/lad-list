import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./weatherSlice";

export const WeatherView = () => {
    const weatherInfo = useSelector(state => state.weather)
    const dispatch = useDispatch();
    console.log(weatherInfo)
    useEffect(() => {
        dispatch(fetchWeather())
    }, [])
    const {temp2m, date, weather} = weatherInfo.weather;
    console.log(temp2m)
    return (
        <div>
            <h2>Weather in cities</h2>
            {/*{ weather.loading && <div>Loading...</div> }*/}
            {/*{ !weather.loading && weather.error ? <div>Error: { weather.error }</div> : null }*/}
            {/*{ !weather.loading && weather ? (*/}
                <div>
                    <h1> тут будет погода {weather} </h1>
                </div>
            {/*) */}
            {/*: null*/}
            {/*}*/}
        </div>
    )
}
