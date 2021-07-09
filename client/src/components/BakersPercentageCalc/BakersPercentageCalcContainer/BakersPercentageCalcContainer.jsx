import React, { useState } from "react";
import FlourInput from "../FlourInput/FlourInput";
import IngredientInput from "../IngredientInput/IngredientInput";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const BakersPercentageCalcContainer = () => {
    const [ flourWeight, setFlourWeight ] = useState(0);
    const [ ingredients, setIngredients ] = useState([]);

    const addIngredient = (currentValues, name, value) => {
        const newValue = {
            name: name,
            value: value
        };
        setIngredients([...currentValues, newValue]);
    };

    const generateIngredientInputs = ingredients => {
        return ingredients.map(ingredient => <IngredientInput key={ ingredient.name } labelName={ ingredient.name } defaultValue={ ingredient.value } />)
    };

    return (
        <BakersPercentageContext.Provider value={ { flourWeight, setFlourWeight, ingredients } }>
            <div className="BakersPercentageCalcContainer">
                <FlourInput value={ flourWeight } />
                { generateIngredientInputs(ingredients) }
                <form onSubmit={ event => addIngredient(ingredients, event.target[0].value, event.target[1].value) }>
                <label>Ingredient Name</label>
                <input></input>
                <label>Ingrdient Amount</label>
                <input></input>
                <button type="submit">Add Ingredient!</button>
                </form>
            </div>
        </BakersPercentageContext.Provider>
    )
};

export default BakersPercentageCalcContainer;