import React from "react";

const ButtonLight = ({ text, type, callback }) => {
    return (
        <button className="ButtonLight p-2 rounded-md ring-2 ring-indigo-600 text-indigo-600" type={ type } onClick={ callback ? () => callback : null }>
            { text }
        </button>
    )
};

export default ButtonLight;