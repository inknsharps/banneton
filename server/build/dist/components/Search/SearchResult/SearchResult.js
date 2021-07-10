import React from "../../../../_snowpack/pkg/react.js";
export const SearchResult = ({image, _id, title}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "SearchResult"
  }, /* @__PURE__ */ React.createElement("a", {
    href: `#/${_id}`
  }, /* @__PURE__ */ React.createElement("img", {
    src: image,
    alt: title
  })));
};
export const SearchResultSmall = ({image, _id, title}) => {
  return /* @__PURE__ */ React.createElement("a", {
    className: "SearchResultSmall container",
    href: `#/${_id}`
  }, /* @__PURE__ */ React.createElement("img", {
    className: "container",
    src: image,
    alt: title
  }));
};
export const SearchResultLarge = ({image, _id, title}) => {
  return /* @__PURE__ */ React.createElement("a", {
    className: "SearchResultLarge lg:col-span-2 lg:row-span-2 container",
    href: `#/${_id}`
  }, /* @__PURE__ */ React.createElement("img", {
    className: "container",
    src: image,
    alt: title
  }));
};
export default SearchResult;
