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
        <div className="SourdoughCalculatorOutputs col-span-2">
            <h1>Flour: { calculateFlourWeight(doughWeight, totalPercentages) }g</h1>
            <h1>Water: { calculateIngredientWeight(waterPercentage, calculateFlourWeight(doughWeight, totalPercentages)) }g</h1>
            <h1>Salt: { calculateIngredientWeight(saltPercentage, calculateFlourWeight(doughWeight, totalPercentages)) }g</h1>
            <h1>Starter: { calculateIngredientWeight(starterPercentage, calculateFlourWeight(doughWeight, totalPercentages)) }g</h1>
        </div>
    )
};

export default SourdoughCalculatorOutputs;