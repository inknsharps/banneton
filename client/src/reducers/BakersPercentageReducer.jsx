import { useReducer } from "react";

const initialState = {
    flourWeight: 100,
    scaledFlourWeight: 1000,
    ingredients: []
};

const bakersPercentageReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_FLOUR_WEIGHT":
            // Recalculate the new percentages for each ingredient as the flourWeight changed
            const updatedIngredients = state.ingredients.map(ingredient => {
                ingredient.percentage = ingredient.weight / action.payload;
                return { ...ingredient };
            });
            return { ...state, ingredients: updatedIngredients, flourWeight: action.payload };

        case "CHANGE_SCALED_FLOUR_WEIGHT":
            return { ...state, scaledFlourWeight: action.payload };

        case "ADD_INGREDIENT":
            // We should have an object for the payload for this case, since we need to calculate the percentage
            const newIngredient = {
                name: action.payload.name,
                weight: action.payload.weight,
                percentage: action.payload.weight / state.flourWeight
            };
            return { ...state, ingredients: [...state.ingredients, newIngredient] };

        case "UPDATE_INGREDIENT":
            // We should have an object for the payload for this case
            // Also, we update the percentage property again
            const { ingredients } = state;
            
            ingredients.forEach(ingredient => {
                if (ingredient.name === action.payload.name) {
                    ingredient.weight = action.payload.weight;
                    ingredient.percentage = action.payload.weight / state.flourWeight;
                };
                return ingredient;
            });

            return { ...state, ingredients };

        case "REMOVE_INGREDIENT":
            const removedIngredients = state.ingredients.filter(ingredient => ingredient.name !== action.payload.name);
            return { ...state, ingredients: removedIngredients };

        default:
            return { ...state };
    };
};

const useBakersPercentageReducer = () => {
    const [ state, dispatch ] = useReducer(bakersPercentageReducer, initialState);
    return [ state, dispatch ];
};

export default useBakersPercentageReducer;