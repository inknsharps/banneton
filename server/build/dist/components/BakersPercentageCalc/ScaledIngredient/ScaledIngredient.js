import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import BakersPercentageContext from "../../../contexts/BakersPercentageContext.js";
const ScaledIngredient = ({labelName, percentage}) => {
  const {scaledFlourWeight} = useContext(BakersPercentageContext);
  const scaledWeight = scaledFlourWeight * percentage;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, labelName), /* @__PURE__ */ React.createElement("h3", null, scaledWeight));
};
export default ScaledIngredient;
