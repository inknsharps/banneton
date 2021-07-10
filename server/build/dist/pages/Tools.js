import React, {useState} from "../../_snowpack/pkg/react.js";
import ToolCardContainer from "../components/ToolCard/ToolCardContainer/ToolCardContainer.js";
import BakersPercentageCalculator from "../components/BakersPercentageCalc/BakersPercentageCalculator/BakersPercentageCalculator.js";
const Tools = () => {
  const [toolStateOne, setToolStateOne] = useState(false);
  const toggleBakersPercentage = () => {
    setToolStateOne((prev) => !prev);
  };
  const toolInfo = [
    {
      name: "bakersPercentage",
      header: "Baker's Percentage Calculator",
      description: "A tool to calculate Baker's percentages from a given recipe, and can scale them accordingly.",
      toggleFunc: toggleBakersPercentage
    },
    {
      name: "sourdoughCalculator",
      header: "Sourdough Calculator",
      description: "A tool to calculate sourdough starter feed ratios, and recipe scaler.",
      toggleFunc: () => alert("Not yet implemented!")
    }
  ];
  const generateTools = (tools) => tools.map((tool) => /* @__PURE__ */ React.createElement(ToolCardContainer, {
    key: tool.name,
    header: tool.header,
    description: tool.description,
    toggleFunc: tool.toggleFunc
  }));
  return /* @__PURE__ */ React.createElement("div", {
    className: "Tools grid grid-cols-1 lg:grid-flow-col gap-5 m-5"
  }, toolStateOne ? /* @__PURE__ */ React.createElement(BakersPercentageCalculator, {
    toggleFunc: toggleBakersPercentage
  }) : generateTools(toolInfo));
};
export default Tools;
