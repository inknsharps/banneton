import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const ScaledIngredient = ({ labelName, percentage }) => {
    const { scaledFlourWeight } = useContext(BakersPercentageContext);

    const scaledWeight = scaledFlourWeight * percentage;

    return (
        <div className="ScaledIngredient">
            <h3>{ labelName }</h3>
            <h3>{ scaledWeight }</h3>
        </div>
    )
};

export default ScaledIngredient;