import React from "react";
import DoughWeightInput from "../SourdoughCalculatorInputs/DoughWeightInput/DoughWeightInput";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import useSourdoughReducer from "../../../reducers/SourdoughCalculatorReducer";
import SourdoughContext from "../../../contexts/SourdoughContext";

const SourdoughCalculator = ({ toggleFunc }) => {
    const [ sourdoughState, sourdoughDispatch ] = useSourdoughReducer();

    return (
        <SourdoughContext.Provider value={ { sourdoughState, sourdoughDispatch } }>
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