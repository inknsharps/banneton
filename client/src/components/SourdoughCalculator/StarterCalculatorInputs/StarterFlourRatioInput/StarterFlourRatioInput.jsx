import React, { useContext } from "react";

import SourdoughContext from "../../../../contexts/SourdoughContext";

const StarterFlourRatioInput = () => {
    const { sourdoughState, sourdoughDispatch } = useContext(SourdoughContext);

    return (
        <div className="StarterFlourRatioInput grid grid-cols-2 text-sm lg:text-base">
            <label>Flour Ratio:</label>
            <input 
                className="border-2 border-gray-200 text-center" 
                defaultValue={ sourdoughState.flourRatio } 
                onChange={ event => sourdoughDispatch({ type: "CHANGE_FLOUR_RATIO", payload: event.target.value }) }>
            </input>
        </div>
    )
};

export default StarterFlourRatioInput;