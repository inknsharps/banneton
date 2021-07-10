import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import BakersPercentageContext from "../../../contexts/BakersPercentageContext.js";
const ScaledFlourInput = () => {
  const {scaledFlourWeight, setScaledFlourWeight} = useContext(BakersPercentageContext);
  return /* @__PURE__ */ React.createElement("div", {
    className: "ScaledFlourInput grid grid-cols-2 text-sm lg:text-md"
  }, /* @__PURE__ */ React.createElement("label", null, "Scaled Flour Weight:"), /* @__PURE__ */ React.createElement("input", {
    className: "border-2 border-gray-200 text-center",
    defaultValue: scaledFlourWeight,
    onChange: (event) => setScaledFlourWeight(event.target.value)
  }));
};
export default ScaledFlourInput;
