import React from "react";
import {useSelector} from "react-redux";

const List = () => {

    const articles = useSelector(state => state.articles)

    return (
        <ul>
            {
                articles.map(elem => (
                    <li key={elem.id}
                        className={elem.id % 2 === 0 ? "red-text" : "blue-text"}
                    >
                        {elem.title}
                    </li>
                ))
            }
        </ul>
    );
}

export default List;