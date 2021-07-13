import React from "react";
import { capitalizeFirst } from "../../../utils/capitalizeFirst";

const PostIngredients = ({ ingredients }) => {
    const generateIngredients = ingredientArray => {
        return ingredientArray.map((ingredient, index) => <li key={ index }>{ capitalizeFirst(ingredient) }</li>)
    };

    return (
        <div className="PostIngredients m-5">
            <h2 className="text-2xl lg:text-left font-medium border-b-2 border-gray-200 p-5 m-5">Ingredient List:</h2>
            <ul>               
                { generateIngredients(ingredients) }
            </ul>
        </div>
    )
};

export default PostIngredients;