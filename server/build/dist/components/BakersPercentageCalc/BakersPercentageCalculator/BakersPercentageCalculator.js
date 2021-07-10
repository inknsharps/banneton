import React, {useState} from "../../../../_snowpack/pkg/react.js";
import FlourInput from "../FlourInput/FlourInput.js";
import ScaledFlourInput from "../ScaledFlourInput/ScaledFlourInput.js";
import IngredientInput from "../IngredientInput/IngredientInput.js";
import PercentageDisplay from "../PercentageDisplay/PercentageDisplay.js";
import ScaledIngredient from "../ScaledIngredient/ScaledIngredient.js";
import ButtonDark from "../../Button/ButtonDark/ButtonDark.js";
import ButtonLight from "../../Button/ButtonLight/ButtonLight.js";
import BakersPercentageContext from "../../../contexts/BakersPercentageContext.js";
import "../../../../_snowpack/pkg/@fortawesome/fontawesome-free/js/all.js";
import "../../../../_snowpack/pkg/@fortawesome/fontawesome-free/js/fontawesome.js";
const BakersPercentageCalculator = ({toggleFunc}) => {
  const [flourWeight, setFlourWeight] = useState(100);
  const [ingredients, setIngredients] = useState([]);
  const [scaledFlourWeight, setScaledFlourWeight] = useState(1e3);
  const [scaledIngredients, setScaledIngredients] = useState([]);
  const addIngredient = (flourWeight2, name, value) => {
    const newValue = {
      name,
      value
    };
    setIngredients((prev) => [...prev, newValue]);
    const scaledValue = {
      name,
      percentage: value / flourWeight2
    };
    setScaledIngredients((prev) => [...prev, scaledValue]);
  };
  const removeIngredient = (name) => {
    setIngredients((prev) => prev.filter((ingredient) => ingredient.name !== name));
    setScaledIngredients((prev) => prev.filter((ingredient) => ingredient.name !== name));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const ingredientName = event.target[0].value;
    const ingredientValue = event.target[1].value;
    if (ingredientName && ingredientValue) {
      addIngredient(flourWeight, ingredientName, ingredientValue);
      event.target[0].value = "";
      event.target[1].value = "";
    }
    ;
  };
  const generateIngredientInputs = (ingredients2) => {
    return ingredients2.map((ingredient) => {
      return /* @__PURE__ */ React.createElement("div", {
        className: "grid grid-cols-4",
        key: ingredient.name
      }, /* @__PURE__ */ React.createElement(IngredientInput, {
        labelName: ingredient.name,
        defaultValue: ingredient.value
      }), /* @__PURE__ */ React.createElement(PercentageDisplay, {
        labelName: ingredient.name,
        value: ingredient.value
      }), /* @__PURE__ */ React.createElement("button", {
        onClick: () => removeIngredient(ingredient.name)
      }, /* @__PURE__ */ React.createElement("i", {
        className: "far fa-times-circle text-indigo-500"
      })));
    });
  };
  const generateScaledIngredients = (ingredients2) => {
    return ingredients2.map((ingredient) => {
      return /* @__PURE__ */ React.createElement("div", {
        className: "grid grid-cols-2",
        key: ingredient.name
      }, /* @__PURE__ */ React.createElement(ScaledIngredient, {
        labelName: ingredient.name,
        percentage: ingredient.percentage
      }));
    });
  };
  return /* @__PURE__ */ React.createElement(BakersPercentageContext.Provider, {
    value: {flourWeight, setFlourWeight, ingredients, setIngredients, scaledFlourWeight, setScaledFlourWeight, scaledIngredients, setScaledIngredients}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "BakersPercentageCalcContainer grid grid-cols-1 lg:grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl lg:text-7xl p-5"
  }, "Baker's Percentage Calculator and Scaler"), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white border border-gray-300 p-5 rounded-md shadow-lg p-10 lg:mx-36"
  }, /* @__PURE__ */ React.createElement("p", null, "Enter ingredients and their respective weight in the Baker's percentage calculator."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Read ", /* @__PURE__ */ React.createElement("a", {
    className: "text-indigo-600 underline",
    href: "https://www.kingarthurbaking.com/pro/reference/bakers-percentage",
    target: "_blank"
  }, "this article"), " if you are not familiar with how these work. "), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "To scale up the recipe, change the flour weight in the scaled measurements form, and it will automatically calculate the amounts based on the recipe you entered.")), /* @__PURE__ */ React.createElement(React.Fragment, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 grid grid-cols-1 gap-2 bg-white border border-gray-300 p-5 rounded-md shadow-lg"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "bg-indigo-400 text-white text-2xl ring-2 ring-offset-4 ring-gray-200 rounded shadow-lg m-5 p-5"
  }, "Baker's Percentages"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 border-b-2 border-gray-200 font-bold text-sm lg:text-md"
  }, /* @__PURE__ */ React.createElement("h3", null, "Ingredient"), /* @__PURE__ */ React.createElement("h3", null, "Weight (g)"), /* @__PURE__ */ React.createElement("h3", null, "Baker's Percentage"), /* @__PURE__ */ React.createElement(React.Fragment, null)), /* @__PURE__ */ React.createElement(FlourInput, null), generateIngredientInputs(ingredients)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 grid grid-cols-1 gap-2 bg-white border border-indigo-300 p-5 rounded-md shadow-lg"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "bg-indigo-400 text-white text-2xl ring-2 ring-offset-4 ring-gray-200 rounded shadow-lg m-5 p-5"
  }, "Scaled Measurements"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 border-b-2 border-gray-200 font-bold text-sm lg:text-md"
  }, /* @__PURE__ */ React.createElement("h3", null, "Ingredient"), /* @__PURE__ */ React.createElement("h3", null, "Scaled Weight (g)")), /* @__PURE__ */ React.createElement(ScaledFlourInput, null), generateScaledIngredients(scaledIngredients)), /* @__PURE__ */ React.createElement("form", {
    className: "col-span-2 grid grid-cols-3 gap-5 bg-white border border-indigo-300 p-5 rounded-md shadow-lg my-5 xl:mx-96 text-sm lg:text-md",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "text-center"
  }, "Ingredient Name"), /* @__PURE__ */ React.createElement("input", {
    className: "border-2 border-gray-200 text-center"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", null, "Ingredient Weight (g)"), /* @__PURE__ */ React.createElement("input", {
    className: "border-2 border-gray-200 text-center"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React.createElement(ButtonLight, {
    text: "Add Ingredient!",
    type: "submit"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(ButtonDark, {
    text: "Return to Tools Menu",
    type: "button",
    callback: toggleFunc
  }))));
};
export default BakersPercentageCalculator;
