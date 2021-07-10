import React from "react";
import ToolCard from "../ToolCard/ToolCard";

const ToolCardContainer = ({ header, description, toggleFunc }) => {
    return (
        <div className="ToolCardContainer bg-white border border-indigo-300 transition duration-500 ease-in-out hover:bg-gray-200 hover:bg-opacity-50 lg:p-5 rounded-md shadow-lg">
            <ToolCard header={ header } description={ description } toggleFunc={ toggleFunc } />
        </div>
    )
};

export default ToolCardContainer;