import React from "react";

const FormRadio = ({ labelName, htmlFor, formName, defaultValue = "", defaultChecked = false }) => {

    return (
        <div className="FormRadio">
            <label className="p-1" htmlFor={ htmlFor }>{ labelName }</label>
            <br />
            <input className="border-2 text-center" type="radio" name={ formName } defaultValue={ defaultValue } defaultChecked={ defaultChecked }></input>
        </div>
    )
};

export default FormRadio;