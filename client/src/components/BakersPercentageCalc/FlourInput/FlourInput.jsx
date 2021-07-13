import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const FlourInput = () => {
    const { bakersPercentageState, dispatchBakersPercentage } = useContext(BakersPercentageContext);

    return (
        <div className="FlourInput col-span-2 grid grid-cols-4 text-sm lg:text-base">
            <label>Flour Weight:</label>
            <input 
                className="border-2 border-gray-200 text-center" 
                value={ bakersPercentageState.flourWeight || "" } 
                onChange={ event => dispatchBakersPercentage({ type: "CHANGE_FLOUR_WEIGHT", payload: parseFloat(event.target.value) }) }>
            </input>
        </div>
    )
};

export default FlourInput;