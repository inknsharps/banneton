import React, { useState } from "react";
import FlourInput from "../FlourInput/FlourInput";
import ScaledFlourInput from "../ScaledFlourInput/ScaledFlourInput";
import IngredientInput from "../IngredientInput/IngredientInput";
import PercentageDisplay from "../PercentageDisplay/PercentageDisplay";
import ScaledIngredient from "../ScaledIngredient/ScaledIngredient";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const BakersPercentageCalcContainer = () => {
    const [ flourWeight, setFlourWeight ] = useState(0);
    const [ ingredients, setIngredients ] = useState([]);
    const [ scaledFlourWeight, setScaledFlourWeight ] = useState(0);
    const [ scaledIngredients, setScaledIngredients ] = useState([]);

    // Whenever a new ingredient is added to the calculator, add onto the state for the ingredients and scaled ingredients for use in other components
    const addIngredient = (flourWeight, name, value) => {
        const newValue = {
            name: name,
            value: value
        };
        setIngredients(prev => [...prev, newValue]);
        const scaledValue = {
            name: name,
            percentage: value / flourWeight
        };
        setScaledIngredients(prev => [...prev, scaledValue]);
    };

    const removeIngredient = name => {
        setIngredients(prev => prev.filter(ingredient => ingredient.name !== name));
        setScaledIngredients(prev => prev.filter(ingredient => ingredient.name !== name));
    };

    const generateIngredientInputs = ingredients => {
        return ingredients.map(ingredient => {
            return ( 
                <div key={ ingredient.name }>
                    <IngredientInput labelName={ ingredient.name } defaultValue={ ingredient.value } />
                    <PercentageDisplay labelName={ ingredient.name } value={ ingredient.value } />
                    <button onClick={ () => removeIngredient(ingredient.name) }>Remove Ingredient</button>
                </div>
            )
        })
    };

    const generateScaledIngredients = ingredients => {
        return ingredients.map(ingredient => {
            return (
                <div key={ ingredient.name }>
                    <ScaledIngredient labelName={ ingredient.name } percentage={ ingredient.percentage } />
                </div>
            )
        })
    }

    return (
        <BakersPercentageContext.Provider value={ { flourWeight, setFlourWeight, ingredients, setIngredients, scaledFlourWeight, setScaledFlourWeight, scaledIngredients, setScaledIngredients } }>
            <div className="BakersPercentageCalcContainer">
                <h1>Baker's Percentages</h1>
                <FlourInput />
                { generateIngredientInputs(ingredients) }
                <form onSubmit={ event => addIngredient(flourWeight, event.target[0].value, event.target[1].value) }>
                    <label>Ingredient Name</label>
                    <input></input>
                    <label>Ingredient Amount</label>
                    <input></input>
                    <button type="submit">Add Ingredient!</button>
                </form>
            </div>
            <div>
                <h1>Scaled Measurements</h1>
                <ScaledFlourInput />
                { generateScaledIngredients(scaledIngredients) }
            </div>
        </BakersPercentageContext.Provider>
    )
};

export default BakersPercentageCalcContainer;