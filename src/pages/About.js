import React, { Fragment } from "react";
import { Cities } from "../components/List/Cities";
import Form from "../components/Form/Form";
export const About = () => {
    return (
        <Fragment>
            <h1>Visited cities</h1>
            <Cities/>
            <Form/>
        </Fragment>
    )
}

export default About
