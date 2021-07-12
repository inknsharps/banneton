import React, { useContext } from "react";

import SourdoughContext from "../../../contexts/SourdoughContext";

const StarterCalculatorOutput = () => {
    const { sourdoughState } = useContext(SourdoughContext);

    const { targetStarterWeight, waterRatio, flourRatio } = sourdoughState;
    const totalRatio = 1 + waterRatio + flourRatio;

    const calculateIngredientWeight = (ingredientRatio, starterWeight, totalRatio) => {
        return Math.ceil((ingredientRatio * (starterWeight / totalRatio)) * 10) / 10;
    };

    return (
        <div className="StarterCalculatorOutput">
            <h3>Seed Starter: { calculateIngredientWeight(1, targetStarterWeight, totalRatio) }g</h3>
            <h3>Water Weight: { calculateIngredientWeight(waterRatio, targetStarterWeight, totalRatio) }g</h3>
            <h3>Flour Weight: { calculateIngredientWeight(flourRatio, targetStarterWeight, totalRatio) }g</h3>
        </div>
    )
};

export default StarterCalculatorOutput;