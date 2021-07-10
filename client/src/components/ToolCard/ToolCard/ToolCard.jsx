import React from "react";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

const ToolCard = ({ header, description, toggleFunc }) => {
    return (
        <div className="ToolCard bg-gray-100 bg-opacity-50 border-4 border-double border-gray-300 rounded-md lg:p-5 lg:m-5">
            <h3 className="bg-indigo-400 text-white text-3xl ring-2 ring-gray-200 ring-offset-4 rounded py-2 px-5 m-10">{ header }</h3>
            <p className="text-md bg-white ring-2 ring-gray-200 ring-offset-4 rounded-md shadow-lg py-5 m-10">{ description }</p>
            <div className="pb-5">
                <ButtonDark text="Launch Tool!" type="button" callback={ toggleFunc } />
            </div>
        </div>
    )
};

export default ToolCard;