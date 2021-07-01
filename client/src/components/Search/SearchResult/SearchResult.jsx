import React from "react";

const SearchResult = ({ image, _id, title }) => {
    return (
        <div className="SearchResult">
            <a href={`#/${_id}`}>
                <img src={ image } alt={ title }/>
            </a>
        </div>
    )
};

export default SearchResult;