import React, { useState } from "react";
import FlourInput from "../FlourInput/FlourInput";
import IngredientInput from "../IngredientInput/IngredientInput";
import PercentageDisplay from "../PercentageDisplay/PercentageDisplay";

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
        return ingredients.map(ingredient => {
            return ( 
                <div key={ ingredient.name }>
                    <IngredientInput labelName={ ingredient.name } defaultValue={ ingredient.value } />
                    <PercentageDisplay labelName={ ingredient.name } value={ ingredient.value } />
                </div>
            )
        })
    };

    return (
        <BakersPercentageContext.Provider value={ { flourWeight, setFlourWeight, ingredients, setIngredients } }>
            <div className="BakersPercentageCalcContainer">
                <FlourInput value={ flourWeight } />
                { generateIngredientInputs(ingredients) }
                <form onSubmit={ event => addIngredient(ingredients, event.target[0].value, event.target[1].value) }>
                    <label>Ingredient Name</label>
                    <input></input>
                    <label>Ingredient Amount</label>
                    <input></input>
                    <button type="submit">Add Ingredient!</button>
                </form>
            </div>
        </BakersPercentageContext.Provider>
    )
};

export default BakersPercentageCalcContainer;