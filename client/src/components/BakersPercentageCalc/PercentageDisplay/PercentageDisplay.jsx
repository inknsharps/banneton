import React, { useContext } from "react";

import { toDecimal } from "../../../utils/toDecimal";
import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const PercentageDisplay = ({ value }) => {
    const { bakersPercentageState } = useContext(BakersPercentageContext);

    const percentage = `${toDecimal(value / bakersPercentageState.flourWeight * 100)} %`;

    return (
        <div className="PercentageDisplay text-sm lg:text-base">
            <h3>{ percentage }</h3>
        </div>
    )
};

export default PercentageDisplay;