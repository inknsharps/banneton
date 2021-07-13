import React, { useContext } from "react";

import { toDecimal } from "../../../utils/toDecimal";
import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const ScaledIngredient = ({ labelName, percentage }) => {
    const { bakersPercentageState } = useContext(BakersPercentageContext);

    const scaledWeight = toDecimal(bakersPercentageState.scaledFlourWeight * percentage);

    return (
        <>
            <h3 className="text-sm lg:text-base">{ labelName }</h3>
            <h3 className="text-sm lg:text-base">{ scaledWeight || "" }</h3>
        </>
    )
};

export default ScaledIngredient;