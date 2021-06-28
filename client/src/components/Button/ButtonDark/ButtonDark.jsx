import React from "react";

const ButtonDark = ({ text, type, callback, data }) => {
    return (
        <button className="ButtonDark p-2 rounded-md bg-indigo-600 text-white" type={ type } onClick={ callback ? () => callback(data) : null }>
            { text }
        </button>
    )
};

export default ButtonDark;