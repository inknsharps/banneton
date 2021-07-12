import { useReducer } from "react";

const initialState = {
    doughWeight: 1000,
    waterPercentage: 0.75,
    saltPercentage: 0.02,
    starterPercentage: 0.2,
    targetStarterWeight: 100,
    waterRatio: 2,
    flourRatio: 2
};

const sourdoughReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_DOUGH":
            return {...state, doughWeight: parseFloat(action.payload) };
        case "CHANGE_WATER":
            return { ...state, waterPercentage: parseFloat(action.payload) / 100 };
        case "CHANGE_SALT":
            return { ...state, saltPercentage: parseFloat(action.payload) / 100 };
        case "CHANGE_STARTER":
            return { ...state, starterPercentage: parseFloat(action.payload) / 100 };
        case "CHANGE_TARGET_STARTER":
            return { ...state, targetStarterWeight: parseFloat(action.payload) };
        case "CHANGE_WATER_RATIO":
            return { ...state, waterRatio: parseFloat(action.payload) };
        case "CHANGE_FLOUR_RATIO":
            return { ...state, flourRatio: parseFloat(action.payload) };
        default:
            return { ...state };
    }
};

const useSourdoughReducer = () => {
    const [ state, dispatch ] = useReducer(sourdoughReducer, initialState);
    return [ state, dispatch ];
};

export default useSourdoughReducer;