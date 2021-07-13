import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const IngredientInput = ({ labelName, defaultValue }) => {
    const { dispatchBakersPercentage } = useContext(BakersPercentageContext);

    return (
        <>
            <label>{ labelName }</label>
            <input 
                className="border-2 border-gray-200 text-center" 
                value={ defaultValue || "" } 
                onChange={ event => dispatchBakersPercentage({ type: "UPDATE_INGREDIENT", payload: { name: labelName, weight: parseFloat(event.target.value) }}) }>
            </input>
        </>
    )
};

export default IngredientInput;