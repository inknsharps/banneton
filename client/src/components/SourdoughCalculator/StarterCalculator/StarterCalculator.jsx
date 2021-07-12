import React from "react";
import StarterTargetWeightInput from "../StarterCalculatorInputs/StarterTargetWeightInput/StarterTargetWeightInput";
import StarterWaterRatioInput from "../StarterCalculatorInputs/StarterWaterRatioInput/StarterWaterRatioInput";
import StarterFlourRatioInput from "../StarterCalculatorInputs/StarterFlourRatioInput/StarterFlourRatioInput";
import StarterCalculatorOutput from "../StarterCalculatorOutput/StarterCalculatorOutput";

const StarterCalculator = () => {
    return (
        <div className="StarterCalculator">
            <div>
                <StarterTargetWeightInput />
                <StarterWaterRatioInput />
                <StarterFlourRatioInput />
            </div>
            <StarterCalculatorOutput />
        </div>
    )
};

export default StarterCalculator;