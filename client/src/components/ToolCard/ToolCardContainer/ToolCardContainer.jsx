import React from "react";
import ToolCard from "../ToolCard/ToolCard";

const ToolCardContainer = ({ header, description, toggleFunc }) => {
    return (
        <div className="ToolCardContainer">
            <ToolCard header={ header } description={ description } toggleFunc={ toggleFunc } />
        </div>
    )
};

export default ToolCardContainer;