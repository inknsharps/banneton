import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const FlourInput = () => {
    const { flourWeight, setFlourWeight } = useContext(BakersPercentageContext);

    return (
        <div className="FlourInput grid grid-cols-4 text-sm lg:text-base">
            <label>Flour Weight:</label>
            <input className="border-2 border-gray-200 text-center" defaultValue={ flourWeight } onChange={ event => setFlourWeight(event.target.value) }></input>
        </div>
    )
};

export default FlourInput;