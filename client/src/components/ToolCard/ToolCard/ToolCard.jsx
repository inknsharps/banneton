import React from "react";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

const ToolCard = ({ header, description, toggleFunc }) => {
    return (
        <div className="ToolCard bg-gray-200 border-4 border-double border-gray-300 p-5 m-5">
            <h3 className="bg-indigo-400 text-white text-3xl ring-2 ring-gray-200 ring-offset-4 rounded px-5 m-10">{ header }</h3>
            <p className="bg-gray-100 rounded-md shadow-lg py-5 m-10">{ description }</p>
            <ButtonDark text="Launch Tool!" type="button" callback={ toggleFunc } />
        </div>
    )
};

export default ToolCard;