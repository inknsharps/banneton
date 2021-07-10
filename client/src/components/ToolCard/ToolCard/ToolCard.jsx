import React from "react";

const ToolCard = ({ header, description, toggleFunc }) => {
    return (
        <div className="ToolCard">
            <h3>{ header }</h3>
            <p>{ description }</p>
            <button onClick={ toggleFunc }>Launch Tool!</button>
        </div>
    )
};

export default ToolCard;