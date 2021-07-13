import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const ScaledFlourInput = () => {
    const { bakersPercentageState, dispatchBakersPercentage } = useContext(BakersPercentageContext);

    return (
        <div className="ScaledFlourInput grid grid-cols-2 text-sm lg:text-base">
            <label>Scaled Flour Weight:</label>
            <input 
                className="border-2 border-gray-200 text-center" 
                value={ bakersPercentageState.scaledFlourWeight || "" } 
                onChange={ event => dispatchBakersPercentage({ type: "CHANGE_SCALED_FLOUR_WEIGHT", payload: parseFloat(event.target.value) }) }>
            </input>
        </div>
    )
};

export default ScaledFlourInput;