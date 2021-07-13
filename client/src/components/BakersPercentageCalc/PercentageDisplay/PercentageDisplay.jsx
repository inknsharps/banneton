import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const PercentageDisplay = ({ value }) => {
    const { bakersPercentageState } = useContext(BakersPercentageContext);

    const percentage = `${value / bakersPercentageState.flourWeight * 100} %`;

    return (
        <div className="PercentageDisplay text-sm lg:text-base">
            <h3>{ percentage }</h3>
        </div>
    )
};

export default PercentageDisplay;