import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const ScaledIngredient = ({ labelName, percentage }) => {
    const { scaledFlourWeight } = useContext(BakersPercentageContext);

    const scaledWeight = scaledFlourWeight * percentage;

    return (
        <>
            <h3>{ labelName }</h3>
            <h3>{ scaledWeight }</h3>
        </>
    )
};

export default ScaledIngredient;