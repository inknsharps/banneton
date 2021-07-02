import React, { useState } from "react";
import { SearchResultLarge, SearchResultSmall } from "../SearchResult/SearchResult";
import FormInput from "../../Form/FormInput/FormInput";
import FormRadio from "../../Form/FormRadio/FormRadio";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import { searchPosts } from "../../../utils/API";

const SearchForm = () => {
    const [ searchResults, setSearchResults ]= useState([]);

    // The returned array elements from the backend in this route are an object with the document property (our data from the model), and a similarity property. We just grab data from the document property for rendering
    const generateSearchResults = results => {
        if (results === undefined) {
            return null;
        };

        // We make a 2D array so we can alter every 1st of 3 indices in the array
        const matrix = results.reduce((rows, key, index) => { 
            return (index % 3 === 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows;
        }, []);

        return matrix.map(row => {
            // For each "row" of the 2D array, check for the first element and make that the big one
            return row.map((col, index) => {
                if (index % 3 === 0) {
                    return <SearchResultLarge key={ col.document._id } _id={ col.document._id } image={ col.document.image } title={ col.document.title } />
                };
                return <SearchResultSmall key={ col.document._id } _id={ col.document._id } image={ col.document.image } title={ col.document.title } />
            }) 
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const queryString = event.target[0].value;
        if (event.target[1].checked) {
            searchPosts("title", queryString)
                .then(data => setSearchResults(data))
            return;
        };
        if (event.target[2].checked) {
            searchPosts("tag", queryString)
                .then(data => setSearchResults(data))
            return;
        };
    };

    return (
        <div className="SearchForm">
            <form onSubmit={ handleSubmit }>
                <div className="flex justify-center">
                    <FormInput labelName="Search:" htmlFor="search" inputType="text" placeholder="Type a query here..." />
                </div>
                <div className="flex justify-center">
                    <FormRadio labelName="Title" formName="search" htmlFor="search" defaultValue="title" defaultChecked={ true }/>
                    <FormRadio labelName="Tag" formName="search" htmlFor="search" defaultValue="tag" defaultChecked={ false } />
                </div>
                <ButtonDark text="Search!" type="submit" />
            </form>
            <div className="flex justify-center">
                {
                    searchResults === undefined || !searchResults[0]
                        ? null 
                        : <div className="grid gap-1 grid-cols-4 grid-rows-4 max-w-7xl bg-gray-200 p-2">
                            { generateSearchResults(searchResults) }
                        </div>
                }
            </div>
        </div>
    )
};

export default SearchForm;