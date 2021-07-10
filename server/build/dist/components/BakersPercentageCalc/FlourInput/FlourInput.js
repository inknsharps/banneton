import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import BakersPercentageContext from "../../../contexts/BakersPercentageContext.js";
const FlourInput = () => {
  const {flourWeight, setFlourWeight} = useContext(BakersPercentageContext);
  return /* @__PURE__ */ React.createElement("div", {
    className: "FlourInput grid grid-cols-4 text-sm lg:text-md"
  }, /* @__PURE__ */ React.createElement("label", null, "Flour Weight:"), /* @__PURE__ */ React.createElement("input", {
    className: "border-2 border-gray-200 text-center",
    defaultValue: flourWeight,
    onChange: (event) => setFlourWeight(event.target.value)
  }));
};
export default FlourInput;
