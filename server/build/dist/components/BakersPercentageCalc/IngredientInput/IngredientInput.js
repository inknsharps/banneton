import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import BakersPercentageContext from "../../../contexts/BakersPercentageContext.js";
const IngredientInput = ({labelName, defaultValue}) => {
  const {flourWeight, ingredients, setIngredients, scaledIngredients, setScaledIngredients} = useContext(BakersPercentageContext);
  const updateIngredientValue = (ingredients2, scaledIngredients2, name, value) => {
    const [updatedIngredient] = ingredients2.filter((ingredient) => ingredient.name === name);
    const otherIngredients = ingredients2.filter((ingredient) => ingredient.name !== name);
    updatedIngredient.value = value;
    setIngredients([...otherIngredients, updatedIngredient]);
    const [updatedScaledIngredient] = scaledIngredients2.filter((ingredient) => ingredient.name === name);
    const otherScaledIngredients = scaledIngredients2.filter((ingredient) => ingredient.name !== name);
    updatedScaledIngredient.percentage = value / flourWeight;
    setScaledIngredients([...otherScaledIngredients, updatedScaledIngredient]);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", null, labelName), /* @__PURE__ */ React.createElement("input", {
    className: "border-2 border-gray-200 text-center",
    value: defaultValue,
    onChange: (event) => updateIngredientValue(ingredients, scaledIngredients, labelName, event.target.value)
  }));
};
export default IngredientInput;
