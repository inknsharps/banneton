import React from "react";

const FormInput = ({ labelName, htmlFor, inputType = "text", placeholder = "Input Placeholder" }) => {
    return (
        <div className="FormInput">
            <label htmlFor={ htmlFor }>{ labelName }</label>
            <input type={ inputType } name={ htmlFor } placeholder={ placeholder }></input>
        </div>
    )
};

export default FormInput;