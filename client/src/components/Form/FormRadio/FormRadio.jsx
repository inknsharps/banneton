import React from "react";

const FormRadio = ({ labelName, htmlFor, formName, defaultValue = "", defaultChecked = false }) => {

    return (
        <div className="FormRadio flex flex-row content-center">
            <label className="p-1" htmlFor={ htmlFor }>{ labelName }</label>
            <br />
            <input className="border-2 text-center self-center" type="radio" name={ formName } defaultValue={ defaultValue } defaultChecked={ defaultChecked }></input>
        </div>
    )
};

export default FormRadio;