import React from "react";

export const SearchResult = ({ image, _id, title }) => {
    return (
        <div className="SearchResult">
            <a href={`#/${_id}`}>
                <img src={ image } alt={ title }/>
            </a>
        </div>
    )
};

export const SearchResultSmall = ({ image, _id, title }) => {
    return (
        <a className="SearchResultSmall container" href={`#/${_id}`}>
            <img className="container" src={ image } alt={ title }/>
        </a>
    )
};

export const SearchResultLarge = ({ image, _id, title }) => {
    return (
        <a className="SearchResultLarge lg:col-span-2 lg:row-span-2 container" href={`#/${_id}`}>
            <img className="container" src={ image } alt={ title }/>
        </a>
    )
};

export default SearchResult;