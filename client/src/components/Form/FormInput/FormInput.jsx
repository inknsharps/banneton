import React from "react";

const FormInput = ({ labelName, htmlFor, inputType = "text", placeholder = "" }) => {
    return (
        <div className="FormInput">
            <label htmlFor={ htmlFor }>{ labelName }</label>
            <input type={ inputType } name={ htmlFor } placeholder={ placeholder }></input>
        </div>
    )
};

export default FormInput;