import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const IngredientInput = ({ labelName, defaultValue }) => {
    const { ingredients, setIngredients } = useContext(BakersPercentageContext);

    const updateIngredientValue = (ingredients, name, value) => {
        // Filter out and get the singular ingredient by the ingredient name, and the other ingredients array
        const [ updatedIngredient ] = ingredients.filter(ingredient => ingredient.name === name);
        console.log(updatedIngredient)
        const otherIngredients = ingredients.filter(ingredient => ingredient.name !== name);
        console.log(otherIngredients)
        updatedIngredient.value = value;
        setIngredients([...otherIngredients, updatedIngredient]);
    };

    return (
        <div className="IngredientInput">
            <label>{ labelName }</label>
            <input className="border-2 border-gray-200" value={ defaultValue } onChange={ event => updateIngredientValue(ingredients, labelName, event.target.value) }></input>
        </div>
    )
};

export default IngredientInput;