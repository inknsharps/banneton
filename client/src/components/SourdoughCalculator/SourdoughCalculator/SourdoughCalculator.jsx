import React from "react";
import DoughWeightInput from "../SourdoughCalculatorInputs/DoughWeightInput/DoughWeightInput";
import WaterInput from "../SourdoughCalculatorInputs/WaterInput/WaterInput";
import SaltInput from "../SourdoughCalculatorInputs/SaltInput/SaltInput";
import StarterInput from "../SourdoughCalculatorInputs/StarterInput/Starterinput";
import SourdoughCalculatorOutputs from "../SourdoughCalculatorOutputs/SourdoughCalculatorOutputs";
import StarterCalculator from "../StarterCalculator/StarterCalculator";
import StarterCalculatorOutput from "../StarterCalculatorOutput/StarterCalculatorOutput";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import useSourdoughReducer from "../../../reducers/SourdoughCalculatorReducer";
import SourdoughContext from "../../../contexts/SourdoughContext";

const SourdoughCalculator = ({ toggleFunc }) => {
    const [ sourdoughState, sourdoughDispatch ] = useSourdoughReducer();

    return (
        <SourdoughContext.Provider value={ { sourdoughState, sourdoughDispatch } }>
            <div className="SourdoughCalculator grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="col-span-2 grid grid-cols-2 gap-5">
                    <h2 className="col-span-2 text-3xl lg:text-7xl p-5">Dough and Starter Calculator</h2>
                    <div className="col-span-2 lg:col-span-1 bg-white border border-gray-300 p-5 rounded-md shadow-lg p-10 lg:mx-36">
                        <p>For the dough calculator, enter a desired dough weight, and respective Baker's percentages for the water, salt, and starter.</p>
                        <br />
                        <p>The output will give you the approximate measurements of each ingredient, that totals the target dough weight.</p>
                        <br />
                        <p>Read <a className="text-indigo-600 underline" href="https://www.kingarthurbaking.com/pro/reference/bakers-percentage" target="_blank">this article</a> if you are not familiar with how Baker's percentages work. </p>
                    </div>
                    <div className="col-span-2 lg:col-span-1 bg-white border border-gray-300 p-5 rounded-md shadow-lg p-10 lg:mx-36">
                        <p>For the starter calculator, enter a desired starter weight, and the respective feeding ratios you wish to use.</p>
                        <br />
                        <p>The output will give you the approximate measurements of each ingredient, that totals the target starter weight.</p>
                    </div>
                    <></>
                    <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-2 bg-white border border-gray-300 p-5 rounded-md shadow-lg">
                        <h3 className="col-span-2 bg-indigo-400 text-white text-2xl ring-2 ring-offset-4 ring-gray-200 rounded shadow-lg m-5 p-5">Dough Calculator</h3>
                        <div className="col-span-2 lg:col-span-1 grid grid-cols-1">
                            <h3 className="bg-indigo-400 text-white text-xl ring ring-offset-2 ring-gray-200 rounded shadow-md p-2 m-5">Input</h3>
                            <DoughWeightInput />
                            <WaterInput />
                            <SaltInput />
                            <StarterInput />
                        </div>
                        <SourdoughCalculatorOutputs />
                    </div>

                    <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-2 bg-white border border-gray-300 p-5 rounded-md shadow-lg">
                        <h3 className="col-span-2 bg-indigo-400 text-white text-2xl ring-2 ring-offset-4 ring-gray-200 rounded shadow-lg m-5 p-5">Starter Calculator</h3>
                        <StarterCalculator />
                        <StarterCalculatorOutput />
                    </div>
                </div>


                <div className="col-span-2">
                    <ButtonDark text="Return to Tools Menu" type="button" callback={ toggleFunc } />
                </div>
            </div>
        </SourdoughContext.Provider>
    )
};

export default SourdoughCalculator;