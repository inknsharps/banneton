import React, { useState } from "react";
import FlourInput from "../FlourInput/FlourInput";
import IngredientInput from "../IngredientInput/IngredientInput";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const BakersPercentageCalcContainer = () => {
    const [ flourWeight, setFlourWeight ] = useState(0);
    const [ ingredients, setIngredients ] = useState([]);

    const addIngredient = (currentValues, newValue) => {
        setIngredients([...currentValues, newValue]);
    };

    const generateIngredientInputs = ingredients => {
        return ingredients.map(ingredient => <IngredientInput key={ ingredient } labelName={ ingredient } />)
    };

    return (
        <BakersPercentageContext.Provider value={ { flourWeight, setFlourWeight } }>
            <div className="BakersPercentageCalcContainer">
                <FlourInput value={ flourWeight } />
                { generateIngredientInputs(ingredients) }
                <button onClick={ () => addIngredient(ingredients, "potato") }>Add Ingredient!</button>
            </div>
        </BakersPercentageContext.Provider>
    )
};

export default BakersPercentageCalcContainer;