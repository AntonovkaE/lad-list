import React from "react";

export const List = ({ list }) => {
    return (
        <ul className="list-group">
            {list.map(item => (
                <li className="list-group-item" key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}
