import React, { useContext } from "react";

import SourdoughContext from "../../../../contexts/SourdoughContext";

const StarterTargetWeightInput = () => {
    const { sourdoughState, sourdoughDispatch } = useContext(SourdoughContext);

    return (
        <div className="StarterTargetWeightInput grid grid-cols-2 text-sm lg:text-md">
            <label>Target Starter Weight (g):</label>
            <input 
                className="border-2 border-gray-200 text-center" 
                defaultValue={ sourdoughState.targetStarterWeight } 
                onChange={ event => sourdoughDispatch({ type: "CHANGE_TARGET_STARTER", payload: event.target.value }) }>
            </input>
        </div>
    )
};

export default StarterTargetWeightInput;