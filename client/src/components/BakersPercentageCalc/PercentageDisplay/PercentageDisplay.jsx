import React, { useContext } from "react";

import BakersPercentageContext from "../../../contexts/BakersPercentageContext";

const PercentageDisplay = ({ labelName, value }) => {
    const { flourWeight } = useContext(BakersPercentageContext);

    const percentage = `${value / flourWeight * 100}%`;

    return (
        <div className="PercentageDisplay">
            <h3>{ labelName }:</h3>{ percentage }
        </div>
    )
};

export default PercentageDisplay;