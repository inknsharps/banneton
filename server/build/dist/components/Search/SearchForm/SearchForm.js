import React, {useState} from "../../../../_snowpack/pkg/react.js";
import {SearchResultLarge, SearchResultSmall} from "../SearchResult/SearchResult.js";
import FormRadio from "../../Form/FormRadio/FormRadio.js";
import ButtonDark from "../../Button/ButtonDark/ButtonDark.js";
import {searchPosts} from "../../../utils/API.js";
const SearchForm = () => {
  const [searchResults, setSearchResults] = useState([]);
  const generateSearchResults = (results) => {
    if (results === void 0) {
      return null;
    }
    ;
    const matrix = results.reduce((rows, key, index) => {
      return (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
    }, []);
    return matrix.map((row) => {
      return row.map((col, index) => {
        if (index % 3 === 0) {
          return /* @__PURE__ */ React.createElement(SearchResultLarge, {
            key: col.document._id,
            _id: col.document._id,
            image: col.document.image,
            title: col.document.title
          });
        }
        ;
        return /* @__PURE__ */ React.createElement(SearchResultSmall, {
          key: col.document._id,
          _id: col.document._id,
          image: col.document.image,
          title: col.document.title
        });
      });
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryString = event.target[0].value;
    if (event.target[1].checked) {
      searchPosts("title", queryString).then((data) => setSearchResults(data));
      return;
    }
    ;
    if (event.target[2].checked) {
      searchPosts("tag", queryString).then((data) => setSearchResults(data));
      return;
    }
    ;
    if (event.target[3].checked) {
      searchPosts("ingredient", queryString).then((data) => setSearchResults(data));
      return;
    }
    ;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "SearchForm"
  }, /* @__PURE__ */ React.createElement("form", {
    className: "bg-gray-200 bg-opacity-50 rounded-lg p-5",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "text-left text-xl border-b-2 border-gray-200 m-2 p-2",
    htmlFor: "search"
  }, "Search:"), /* @__PURE__ */ React.createElement("input", {
    className: "text-center w-full m-2 p-2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row justify-evenly items-center"
  }, /* @__PURE__ */ React.createElement(FormRadio, {
    labelName: "Title",
    formName: "search",
    htmlFor: "search",
    defaultValue: "title",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement(FormRadio, {
    labelName: "Tag",
    formName: "search",
    htmlFor: "search",
    defaultValue: "tag",
    defaultChecked: false
  }), /* @__PURE__ */ React.createElement(FormRadio, {
    labelName: "Ingredient",
    formName: "search",
    htmlFor: "search",
    defaultValue: "ingredient",
    defaultChecked: false
  })), /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement(ButtonDark, {
    text: "Search!",
    type: "submit"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center"
  }, searchResults === void 0 || !searchResults[0] ? null : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-3xl border-b-2 border-gray-200 p-2 m-2"
  }, "Results:"), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-1 grid-cols-1 lg:grid-cols-4 grid-rows-4 max-w-7xl bg-gray-200 lg:p-3 lg:m-5"
  }, generateSearchResults(searchResults)))));
};
export default SearchForm;
