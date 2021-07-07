import React from "react";

const ButtonLight = ({ text, type, callback, data }) => {
    return (
        <button className="ButtonLight p-2 rounded-md ring-2 ring-indigo-600 text-indigo-600 transition duration-500 hover:bg-indigo-600 hover:text-white" type={ type } onClick={ callback ? () => callback(data) : null }>
            { text }
        </button>
    )
};

export default ButtonLight;