import React from "../../_snowpack/pkg/react.js";
import HeroContainer from "../components/Hero/HeroContainer/HeroContainer.js";
import ImageContainer from "../components/Image/ImageContainer/ImageContainer.js";
import SectionHeader from "../components/Section/SectionHeader/SectionHeader.js";
import {getPosts} from "../utils/API.js";
const Home = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "Home m-5"
  }, /* @__PURE__ */ React.createElement(HeroContainer, null), /* @__PURE__ */ React.createElement(SectionHeader, {
    headerText: "Latest Posts:"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-3/4"
  }, /* @__PURE__ */ React.createElement(ImageContainer, {
    getRequest: getPosts
  }))));
};
export default Home;
