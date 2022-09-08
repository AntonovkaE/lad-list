import React, { Fragment } from "react";
import Form from "../components/Form/Form";

export const About = ({onShowWeather}) => {
    return (
        <Fragment>
            <h2>Узнать погоду в любом городе</h2>
            <Form handleSubmit={onShowWeather}/>
        </Fragment>

    )
}

export default About
