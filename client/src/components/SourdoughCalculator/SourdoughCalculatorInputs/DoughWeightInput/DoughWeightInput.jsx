import React, { useContext } from "react";

import SourdoughContext from "../../../../contexts/SourdoughContext";

const DoughWeightInput = () => {
    const { sourdoughState, sourdoughDispatch } = useContext(SourdoughContext);

    return (
        <div className="DoughWeightInput grid grid-cols-2 text-sm lg:text-md lg:mr-10">
            <label>Dough Weight (g):</label>
            <input 
                className="border-2 border-gray-200 text-center" 
                defaultValue={ sourdoughState.doughWeight }
                onChange={ event => sourdoughDispatch({ type: "CHANGE_DOUGH", payload: event.target.value }) }>
            </input>
        </div>
    )
};

export default DoughWeightInput;