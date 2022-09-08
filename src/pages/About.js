import React, { Fragment } from "react";
import Form from "../components/Form/Form";
import City from "../components/City/City";
import { useSelector } from "react-redux";

export const About = ({onShowWeather}) => {
    const data = useSelector((state) => state.city);
    console.log(data)
    return (
        <Fragment>
            <h1>hi</h1>
            <City city={data.city}/>
            <Form handleSubmit={onShowWeather}/>
        </Fragment>

    )
}

export default About
