import React, { useContext } from "react";

import SourdoughContext from "../../../../contexts/SourdoughContext";

const DoughWeightInput = () => {
    const { doughWeight, setDoughWeight } = useContext(SourdoughContext);

    return (
        <div className="DoughWeightInput grid grid-cols-4 text-sm lg:text-md">
            <label>Dough Weight:</label>
            <input className="border-2 border-gray-200 text-center" defaultValue={ doughWeight } onChange={ event => setDoughWeight(event.target.value) }></input>
        </div>
    )
};

export default DoughWeightInput;