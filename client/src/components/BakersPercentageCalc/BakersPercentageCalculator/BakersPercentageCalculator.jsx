import React, { useState } from "react";
import FlourInput from "../FlourInput/FlourInput";
import ScaledFlourInput from "../ScaledFlourInput/ScaledFlourInput";
import IngredientInput from "../IngredientInput/IngredientInput";
import PercentageDisplay from "../PercentageDisplay/PercentageDisplay";
import ScaledIngredient from "../ScaledIngredient/ScaledIngredient";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";
import ButtonLight from "../../Button/ButtonLight/ButtonLight";

import useBakersPercentageReducer from "../../../reducers/BakersPercentageReducer";
import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

import "@fortawesome/fontawesome-free/js/all";
import "@fortawesome/fontawesome-free/js/fontawesome";

const BakersPercentageCalculator = ({ toggleFunc }) => {
    const [ bakersPercentageState, dispatchBakersPercentage ] = useBakersPercentageReducer();

    const [ flourWeight, setFlourWeight ] = useState(100);
    const [ ingredients, setIngredients ] = useState([]);
    const [ scaledFlourWeight, setScaledFlourWeight ] = useState(1000);
    const [ scaledIngredients, setScaledIngredients ] = useState([]);

    const removeIngredient = name => {
        setIngredients(prev => prev.filter(ingredient => ingredient.name !== name));
        setScaledIngredients(prev => prev.filter(ingredient => ingredient.name !== name));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const ingredientName = event.target[0].value;
        const ingredientWeight = parseFloat(event.target[1].value);
        if (ingredientName && ingredientWeight) {
            dispatchBakersPercentage({ type: "ADD_INGREDIENT", payload: { name: ingredientName, weight: ingredientWeight } });
            event.target[0].value = "";
            event.target[1].value = "";
        };
    };

    const generateIngredientInputs = ingredients => {
        return ingredients.map(ingredient => {
            return ( 
                <div className="grid grid-cols-4" key={ ingredient.name }>
                    <IngredientInput labelName={ ingredient.name } defaultValue={ ingredient.weight } />
                    <PercentageDisplay labelName={ ingredient.name } value={ ingredient.weight } />
                    <button onClick={ () => removeIngredient(ingredient.name) }>
                        <i className="far fa-times-circle text-indigo-500" />
                    </button>
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
        <BakersPercentageContext.Provider value={ { bakersPercentageState, dispatchBakersPercentage, flourWeight, setFlourWeight, ingredients, setIngredients, scaledFlourWeight, setScaledFlourWeight, scaledIngredients, setScaledIngredients } }>
            <div className="BakersPercentageCalcContainer grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="col-span-2">
                    <h2 className="text-3xl lg:text-7xl p-5">Baker's Percentage Calculator and Scaler</h2>
                    <div className="bg-white border border-gray-300 p-5 rounded-md shadow-lg p-10 lg:mx-36">
                        <p>Enter ingredients and their respective weight in the Baker's percentage calculator.</p>
                        <br />
                        <p>Read <a className="text-indigo-600 underline" href="https://www.kingarthurbaking.com/pro/reference/bakers-percentage" target="_blank">this article</a> if you are not familiar with how these work. </p>
                        <br />
                        <p>To scale up the recipe, change the flour weight in the scaled measurements form, and it will automatically calculate the amounts based on the recipe you entered.</p>
                    </div>
                    <></>
                </div>
                <div className="col-span-2 lg:col-span-1 grid grid-cols-1 gap-2 bg-white border border-gray-300 p-5 rounded-md shadow-lg">
                    <h3 className="bg-indigo-400 text-white text-2xl ring-2 ring-offset-4 ring-gray-200 rounded shadow-lg m-5 p-5">Baker's Percentages</h3>
                    <div className="grid grid-cols-4 border-b-2 border-gray-200 font-bold text-sm lg:text-base">
                        <h3>Ingredient</h3>
                        <h3>Weight (g)</h3>
                        <h3>Baker's Percentage</h3>
                        <></>
                    </div>
                    <FlourInput />
                    { generateIngredientInputs(bakersPercentageState.ingredients) }
                </div>
                <div className="col-span-2 lg:col-span-1 grid grid-cols-1 gap-2 bg-white border border-indigo-300 p-5 rounded-md shadow-lg">
                    <h3 className="bg-indigo-400 text-white text-2xl ring-2 ring-offset-4 ring-gray-200 rounded shadow-lg m-5 p-5">Scaled Measurements</h3>
                    <div className="grid grid-cols-2 border-b-2 border-gray-200 font-bold text-sm lg:text-base">
                        <h3>Ingredient</h3>
                        <h3>Scaled Weight (g)</h3>
                    </div>
                    <ScaledFlourInput />
                    { generateScaledIngredients(bakersPercentageState.ingredients) }
                </div>
                <form className="col-span-2 grid grid-cols-3 gap-5 bg-white border border-indigo-300 p-5 rounded-md shadow-lg my-5 xl:mx-96 text-sm lg:text-base" onSubmit={ handleSubmit }>
                    <div className="flex flex-col">
                        <label className="text-center">Ingredient Name</label>
                        <input className="border-2 border-gray-200 text-center"></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Ingredient Weight (g)</label>
                        <input className="border-2 border-gray-200 text-center"></input>
                    </div>
                    <div className="self-center">
                        <ButtonLight text="Add Ingredient!" type="submit" />
                    </div>
                </form>
                <div className="col-span-2">
                    <ButtonDark text="Return to Tools Menu" type="button" callback={ toggleFunc } />
                </div>
            </div>
        </BakersPercentageContext.Provider>
    )
};

export default BakersPercentageCalculator;