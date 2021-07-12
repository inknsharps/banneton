import React, { useContext } from "react";

import SourdoughContext from "../../../../contexts/SourdoughContext";

const StarterInput = () => {
    const { sourdoughState, sourdoughDispatch } = useContext(SourdoughContext);

    return (
        <div className="StarterInput grid grid-cols-2 text-sm lg:text-base lg:mr-10">
            <label>Starter (%):</label>
            <input 
                className="border-2 border-gray-200 text-center" 
                defaultValue={ sourdoughState.starterPercentage * 100 } 
                onChange={ event => sourdoughDispatch({ type: "CHANGE_STARTER", payload: event.target.value }) }>
            </input>
        </div>
    )
};

export default StarterInput;