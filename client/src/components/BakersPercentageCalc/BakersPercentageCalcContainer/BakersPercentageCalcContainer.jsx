import React, { useState } from "react";
import FlourInput from "../FlourInput/FlourInput";
import ScaledFlourInput from "../ScaledFlourInput/ScaledFlourInput";
import IngredientInput from "../IngredientInput/IngredientInput";
import PercentageDisplay from "../PercentageDisplay/PercentageDisplay";
import ScaledIngredient from "../ScaledIngredient/ScaledIngredient";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const BakersPercentageCalcContainer = () => {
    const [ flourWeight, setFlourWeight ] = useState(100);
    const [ ingredients, setIngredients ] = useState([]);
    const [ scaledFlourWeight, setScaledFlourWeight ] = useState(1000);
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

    const handleSubmit = event => {
        event.preventDefault();
        addIngredient(flourWeight, event.target[0].value, event.target[1].value);
        event.target[0].value = "";
        event.target[1].value = "";
    };

    const generateIngredientInputs = ingredients => {
        return ingredients.map(ingredient => {
            return ( 
                <div className="grid grid-cols-4" key={ ingredient.name }>
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
                <div className="grid grid-cols-2" key={ ingredient.name }>
                    <ScaledIngredient labelName={ ingredient.name } percentage={ ingredient.percentage } />
                </div>
            )
        })
    }

    return (
        <BakersPercentageContext.Provider value={ { flourWeight, setFlourWeight, ingredients, setIngredients, scaledFlourWeight, setScaledFlourWeight, scaledIngredients, setScaledIngredients } }>
            <div className="BakersPercentageCalcContainer grid grid-cols-2">
                <div className="grid grid-cols-1">
                    <h1>Baker's Percentages</h1>
                    <FlourInput />
                    { generateIngredientInputs(ingredients) }
                </div>
                <div className="grid grid-cols-1">
                    <h1>Scaled Measurements</h1>
                    <ScaledFlourInput />
                    { generateScaledIngredients(scaledIngredients) }
                </div>
                <form className="col-span-2" onSubmit={ handleSubmit }>
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