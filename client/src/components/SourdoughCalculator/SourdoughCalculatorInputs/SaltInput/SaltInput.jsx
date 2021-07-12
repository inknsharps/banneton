import React, { useContext } from "react";

import SourdoughContext from "../../../../contexts/SourdoughContext";

const SaltInput = () => {
    const { sourdoughState, sourdoughDispatch } = useContext(SourdoughContext);

    return (
        <div className="SaltInput grid grid-cols-2 text-sm lg:text-md lg:mr-10">
            <label>Salt (%):</label>
            <input 
                className="border-2 border-gray-200 text-center" 
                defaultValue={ sourdoughState.saltPercentage * 100 } 
                onChange={ event => sourdoughDispatch({ type: "CHANGE_SALT", payload: event.target.value }) }>
            </input>
        </div>
    )
};

export default SaltInput;