import React, { Fragment } from "react";
import Form from "../components/Form/Form";

export const About = ({onShowWeather}) => {
    return (
        <Fragment>
            <h1>hi</h1>
            <Form handleSubmit={onShowWeather}/>
        </Fragment>

    )
}

export default About
