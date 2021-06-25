import React from "react";

const FormInput = ({ labelName, htmlFor, inputType = "text", placeholder = "" }) => {
    return (
        <div className="FormInput">
            <label className="p-1" htmlFor={ htmlFor }>{ labelName }</label>
            <br />
            <input className="border-2 text-center" type={ inputType } name={ htmlFor } placeholder={ placeholder }></input>
        </div>
    )
};

export default FormInput;