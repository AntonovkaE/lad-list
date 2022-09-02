import React from "react";
import { useSelector} from "react-redux";
import City from "../City/City";


export const Cities = () => {
    const cities = useSelector((state) => state.cities);

    return (
        <ul className="list-group">
            {cities.map(item => (
                <City id={item.id} city={item.city}/>
            ))}
        </ul>
    )
}
