import React from "react";
import StarterTargetWeightInput from "../StarterCalculatorInputs/StarterTargetWeightInput/StarterTargetWeightInput";
import StarterWaterRatioInput from "../StarterCalculatorInputs/StarterWaterRatioInput/StarterWaterRatioInput";
import StarterFlourRatioInput from "../StarterCalculatorInputs/StarterFlourRatioInput/StarterFlourRatioInput";

const StarterCalculator = () => {
    return (
        <div className="StarterCalculator col-span-2 lg:col-span-1 grid grid-cols-1">
            <h3 className="bg-indigo-400 text-white text-xl ring ring-offset-2 ring-gray-200 rounded shadow-md p-2 m-5">Input</h3>
            <StarterTargetWeightInput />
            <StarterWaterRatioInput />
            <StarterFlourRatioInput />
        </div>
    )
};

export default StarterCalculator;