import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const IngredientInput = ({ labelName, defaultValue }) => {
    const { flourWeight, ingredients, setIngredients, scaledIngredients, setScaledIngredients } = useContext(BakersPercentageContext);

    const updateIngredientValue = (ingredients, scaledIngredients, name, value) => {
        // Filter out and get the singular ingredient by the ingredient name, and the other ingredients array
        const [ updatedIngredient ] = ingredients.filter(ingredient => ingredient.name === name);
        const otherIngredients = ingredients.filter(ingredient => ingredient.name !== name);
        updatedIngredient.value = value;
        setIngredients([...otherIngredients, updatedIngredient]);

        const [ updatedScaledIngredient ] = scaledIngredients.filter(ingredient => ingredient.name === name);
        const otherScaledIngredients = scaledIngredients.filter(ingredient => ingredient.name !== name);
        updatedScaledIngredient.percentage = value / flourWeight;
        setScaledIngredients([...otherScaledIngredients, updatedScaledIngredient]);
    };

    return (
        <>
            <label>{ labelName }</label>
            <input className="border-2 border-gray-200" value={ defaultValue } onChange={ event => updateIngredientValue(ingredients, scaledIngredients, labelName, event.target.value) }></input>
        </>
    )
};

export default IngredientInput;