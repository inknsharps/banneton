import React, { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import FormInput from "../../Form/FormInput/FormInput";
import FormRadio from "../../Form/FormRadio/FormRadio";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import { searchPosts } from "../../../utils/API";

const SearchForm = () => {
    const [ searchResults, setSearchResults ]= useState([]);

    // The returned array elements from the backend in this route are an object with the document property (our data from the model), and a similarity property. We just grab data from the document property for rendering
    const generateSearchResults = results => {
        return results.map(result => <SearchResult key={ result.document._id } _id={ result.document._id } image={ result.document.image } title={ result.document.title } />);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const queryString = event.target[0].value;
        if (event.target[1].checked) {
            searchPosts("title", queryString)
                .then(data => {console.log(data);setSearchResults(data)})
            return;
        }
        if (event.target[2].checked) {
            searchPosts("tag", queryString)
                .then(data => setSearchResults(data))
            return;
        }
    };

    return (
        <div className="SearchForm">
            <form onSubmit={ handleSubmit }>
                <FormInput labelName="Search:" htmlFor="search" inputType="text" placeholder="Type a query here..." />
                <FormRadio labelName="Title" formName="search" htmlFor="search" defaultValue="title" defaultChecked={ true }/>
                <FormRadio labelName="Tag" formName="search" htmlFor="search" defaultValue="tag" defaultChecked={ false } />
                <ButtonDark text="Search!" type="submit" />
            </form>
            <div>
                { generateSearchResults(searchResults) }
            </div>
        </div>
    )
};

export default SearchForm;