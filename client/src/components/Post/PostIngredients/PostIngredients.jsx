import React from "react";

const PostIngredients = ({ ingredients }) => {
    const generateIngredients = ingredientArray => {
        return ingredientArray.map((ingredient, index) => <li key={ index }>{ ingredient }</li>)
    };
    return (
        <div className="PostIngredients">
            <h2 className="text-xl bg-gray-300 p-5 m-5">Ingredient List:</h2>
            <ul>               
                { generateIngredients(ingredients) }
            </ul>
        </div>
    )
};

export default PostIngredients;