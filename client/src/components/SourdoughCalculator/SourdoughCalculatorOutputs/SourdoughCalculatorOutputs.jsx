import React, { useContext } from "react";

import SourdoughContext from "../../../contexts/SourdoughContext";

const SourdoughCalculatorOutputs = () => {
    const { sourdoughState } = useContext(SourdoughContext);
    const { doughWeight, waterPercentage, saltPercentage, starterPercentage } = sourdoughState;

    const totalPercentages = 100 + ((waterPercentage + saltPercentage + starterPercentage) * 100);

    const calculateFlourWeight = (doughWeight, totalPercentages) => {
        return Math.ceil((doughWeight * (100 / totalPercentages)) * 10) / 10;
    };

    const calculateIngredientWeight = (ingredientPercentage, flourWeight) => {
        return Math.ceil((flourWeight * ingredientPercentage) * 10) / 10;
    };

    return (
        <div className="SourdoughCalculatorOutputs">
            <h3 className="bg-indigo-400 text-white text-xl ring ring-offset-2 ring-gray-200 rounded shadow-md p-2 m-5">Ingredient Weights</h3>
            <h3>Flour: { calculateFlourWeight(doughWeight, totalPercentages) }g</h3>
            <h3>Water: { calculateIngredientWeight(waterPercentage, calculateFlourWeight(doughWeight, totalPercentages)) } g</h3>
            <h3>Salt: { calculateIngredientWeight(saltPercentage, calculateFlourWeight(doughWeight, totalPercentages)) } g</h3>
            <h3>Starter: { calculateIngredientWeight(starterPercentage, calculateFlourWeight(doughWeight, totalPercentages)) } g</h3>
        </div>
    )
};

export default SourdoughCalculatorOutputs;