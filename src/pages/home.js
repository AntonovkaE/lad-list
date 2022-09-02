import React, { Fragment } from "react";
import { Form } from "../components/Form";
import { Cities } from "../components/Cities";
export const Home = () => {
    const  list = new Array(3)
        .fill('')
        .map((_, i) => ({id: i, title: `первая запись ${i}`}));
    return (
        <Fragment>
            <h1>HOME</h1>
            <Form/>
            <hr/>
            <Cities list={list}></Cities>
        </Fragment>
    )
}

export default Home
