import React from "react";

const IngredientInput = ({ labelName, defaultValue }) => {
    return (
        <div className="IngredientInput">
            <label>{ labelName }</label>
            <input className="border-2 border-gray-200" defaultValue={ defaultValue } onChange={ event => console.log(event.target.value) }></input>
        </div>
    )
};

export default IngredientInput;