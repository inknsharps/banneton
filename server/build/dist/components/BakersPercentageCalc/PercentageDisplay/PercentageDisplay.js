import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import BakersPercentageContext from "../../../contexts/BakersPercentageContext.js";
const PercentageDisplay = ({value}) => {
  const {flourWeight} = useContext(BakersPercentageContext);
  const percentage = `${value / flourWeight * 100}%`;
  return /* @__PURE__ */ React.createElement("div", {
    className: "PercentageDisplay"
  }, /* @__PURE__ */ React.createElement("h3", null, percentage));
};
export default PercentageDisplay;
