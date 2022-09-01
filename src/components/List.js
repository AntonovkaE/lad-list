import React from "react";

export const List = ({ list }) => {
    return (
        <ul className="list-group">
            {list.map(item => (
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
