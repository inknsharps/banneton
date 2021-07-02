import React from "react";
import SearchContainer from "../components/Search/SearchContainer/SearchContainer";

const Search = () => {
    return (
        <div className="Search p-5 m-5">
            <h1 className="text-5xl m-5">Search for posts here!</h1>
            <div className="flex justify-center">
                <SearchContainer />
            </div>
        </div>
    )
};

export default Search;