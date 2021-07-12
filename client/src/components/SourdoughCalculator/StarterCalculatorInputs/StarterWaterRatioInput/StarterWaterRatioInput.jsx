import React, { useContext } from "react";

import SourdoughContext from "../../../../contexts/SourdoughContext";

const StarterWaterRatioInput = () => {
    const { sourdoughState, sourdoughDispatch } = useContext(SourdoughContext);

    return (
        <div className="StarterWaterRatioInput grid grid-cols-2 text-sm lg:text-base">
            <label>Water Ratio:</label>
            <input 
                className="border-2 border-gray-200 text-center" 
                defaultValue={ sourdoughState.waterRatio } 
                onChange={ event => sourdoughDispatch({ type: "CHANGE_WATER_RATIO", payload: event.target.value }) }>
            </input>
        </div>
    )
};

export default StarterWaterRatioInput;