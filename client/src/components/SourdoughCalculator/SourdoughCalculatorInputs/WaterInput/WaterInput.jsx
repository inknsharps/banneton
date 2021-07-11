import React, { useContext } from "react";

import SourdoughContext from "../../../../contexts/SourdoughContext";

const WaterInput = () => {
    const { sourdoughState, sourdoughDispatch } = useContext(SourdoughContext);

    return (
        <div className="WaterInput grid grid-cols-4 text-sm lg:text-md">
            <label>Water Percentage:</label>
            <input 
                className="border-2 border-gray-200 text-center" 
                defaultValue={ sourdoughState.waterPercentage * 100 } 
                onChange={ event => sourdoughDispatch({ type: "CHANGE_WATER", payload: event.target.value }) }>
            </input>
        </div>
    )
};

export default WaterInput;