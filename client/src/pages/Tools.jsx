import React, { useState } from "react";
import ToolCardContainer from "../components/ToolCard/ToolCardContainer/ToolCardContainer";
import BakersPercentageCalculator from "../components/BakersPercentageCalc/BakersPercentageCalculator/BakersPercentageCalculator";

const Tools = () => {
    const [ toolStateOne, setToolStateOne ] = useState(false);
    
    const toggleBakersPercentage = () => {
        setToolStateOne(prev => !prev)
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

    const generateTools = tools => tools.map(tool => <ToolCardContainer key={ tool.name } header={ tool.header } description={ tool.description } toggleFunc={ tool.toggleFunc } />);

    return (
        <div className="Tools grid grid-flow-col gap-5 m-5">
            { toolStateOne
                ? <BakersPercentageCalculator toggleFunc={ toggleBakersPercentage } /> 
                : generateTools(toolInfo) }
        </div>
    )
};

export default Tools;