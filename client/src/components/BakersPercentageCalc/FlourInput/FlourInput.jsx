import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const FlourInput = () => {
    const { flourWeight, setFlourWeight } = useContext(BakersPercentageContext);

    return (
        <div className="FlourInput">
            <label>Flour Weight:</label>
            <input className="border-2 border-gray-200" defaultValue={ flourWeight } onChange={ event => setFlourWeight(parseInt(event.target.value)) }></input>
        </div>
    )
};

export default FlourInput;