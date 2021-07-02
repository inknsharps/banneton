import React from "react";

const FormInput = ({ labelName, htmlFor, inputType = "text", placeholder = "", defaultValue = "" }) => {
    return (
        <div className="FormInput flex flex-row justify-between content-center">
            <label className="p-1" htmlFor={ htmlFor }>{ labelName }</label>
            <br />
            <input className="border-2 text-center" type={ inputType } name={ htmlFor } placeholder={ placeholder } defaultValue={ defaultValue }></input>
        </div>
    )
};

export default FormInput;