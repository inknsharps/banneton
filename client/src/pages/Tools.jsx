import React, { useState } from "react";
import ToolCardContainer from "../components/ToolCard/ToolCardContainer/ToolCardContainer";
import BakersPercentageCalculator from "../components/BakersPercentageCalc/BakersPercentageCalculator/BakersPercentageCalculator";
import SourdoughCalculator from "../components/SourdoughCalculator/SourdoughCalculator/SourdoughCalculator";

const Tools = () => {
    const [ toolStateOne, setToolStateOne ] = useState(false);
    const [ toolStateTwo, setToolStateTwo ] = useState(false);
    
    const toggleBakersPercentage = () => {
        setToolStateOne(prev => !prev)
    };

    const toggleSourdoughCalculator = () => {
        setToolStateTwo(prev => !prev)
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
            header: "Sourdough Starter and Dough Calculator",
            description: "A tool to calculate sourdough starter feed ratios, and dough ingredient weights.",
            toggleFunc: toggleSourdoughCalculator
        }
    ];

    const generateTools = tools => tools.map(tool => <ToolCardContainer key={ tool.name } header={ tool.header } description={ tool.description } toggleFunc={ tool.toggleFunc } />);

    return (
        <div className="Tools grid grid-cols-1 lg:grid-flow-col gap-5 m-5">
            { !toolStateOne && !toolStateTwo ? generateTools(toolInfo) : null }
            { toolStateOne ? <BakersPercentageCalculator toggleFunc={ toggleBakersPercentage } /> : null }
            { toolStateTwo ? <SourdoughCalculator toggleFunc={ toggleSourdoughCalculator } /> : null }
        </div>
    )
};

export default Tools;