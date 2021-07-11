import React, { useState } from "react";
import DoughWeightInput from "../SourdoughCalculatorInputs/DoughWeightInput/DoughWeightInput";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import SourdoughContext from "../../../contexts/SourdoughContext";

const SourdoughCalculator = ({ toggleFunc }) => {
    const [ doughWeight, setDoughWeight ] = useState(100);

    return (
        <SourdoughContext.Provider value={ { doughWeight, setDoughWeight } }>
            <div className="SourdoughCalculator grid grid-cols-1 lg:grid-cols-2 gap-5">
                <DoughWeightInput />
                <div className="col-span-2">
                    <ButtonDark text="Return to Tools Menu" type="button" callback={ toggleFunc } />
                </div>
            </div>
        </SourdoughContext.Provider>
    )
};

export default SourdoughCalculator;