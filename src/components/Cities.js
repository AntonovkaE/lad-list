import React from "react";
import { useSelector} from "react-redux";


export const Cities = () => {
    const cities = useSelector((state) => {
        state.cities

    });

    return (
        <ul className="list-group">
            {cities.map(item => (
                <li className="list-group-item list-item" key={item.id}>
                    <div>
                        <strong className="m-3">{item.title}</strong>
                        <span>{item.id}</span>
                    </div>

                    <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
                </li>
            ))}
        </ul>
    )
}
