import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const ScaledFlourInput = () => {
    const { scaledFlourWeight, setScaledFlourWeight } = useContext(BakersPercentageContext);

    return (
        <div className="ScaledFlourInput grid grid-cols-2 text-sm lg:text-base">
            <label>Scaled Flour Weight:</label>
            <input className="border-2 border-gray-200 text-center" defaultValue={ scaledFlourWeight } onChange={ event => setScaledFlourWeight(event.target.value) }></input>
        </div>
    )
};

export default ScaledFlourInput;