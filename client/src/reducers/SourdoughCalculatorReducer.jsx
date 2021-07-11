import { useReducer } from "react";

const initialState = {
    doughWeight: 100,
    waterPercentage: 0.75,
    saltPercentage: 0.02,
    starterPercentage: 0.2
};

const sourdoughReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_DOUGH":
            return {...state, doughWeight: parseInt(action.payload) };
        case "CHANGE_WATER":
            return { ...state, waterPercentage: action.payload / 100 };
        case "CHANGE_SALT":
            return { ...state, saltPercentage: action.payload / 100 };
        case "CHANGE_STARTER":
            return { ...state, starterPercentage: action.payload / 100 };
        default:
            return { ...state }
    }
};

const useSourdoughReducer = () => {
    const [ state, dispatch ] = useReducer(sourdoughReducer, initialState);
    return [ state, dispatch ];
};

export default useSourdoughReducer;