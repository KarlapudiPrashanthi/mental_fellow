// src/components/RecipeSelector.jsx
import React, { useState } from "react";

const recipesData = {
  Pancakes: ["Flour", "Eggs", "Milk", "Butter", "Sugar"],
  Spaghetti: ["Pasta", "Tomato Sauce", "Garlic", "Olive Oil", "Basil"],
  Salad: ["Lettuce", "Tomatoes", "Cucumbers", "Carrots", "Dressing"],
  Sandwich: ["Bread", "Cheese", "Lettuce", "Tomato", "Ham"],
  GrilledCheeseSandwich:["Bread", "Cheese", "Butter"],
  Pasta:["Pasta", "Tomato", "Cucumber", "Olives", "Feta Cheese", "Olive Oil", "Lemon Juice"],
VeggieWrap:["Tortilla", "Lettuce", "Tomato", "Cucumber", "Avocado", "Hummus"],
ChickenCaesarSalad:["Chicken Breast", "Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing"],
VeggieBurger:["Veggie Patty", "Bun", "Lettuce", "Tomato", "Pickles", "Ketchup"],
Tacos:["Taco Shells", "Ground Beef", "Lettuce", "Tomato", "Cheese", "Sour Cream"],
Smoothie:["Banana", "Strawberries", "Yogurt", "Honey", "Almond Milk"],
Omelette:["Eggs", "Cheese", "Onion", "Tomato", "Spinach", "Salt", "Pepper"],

};

const RecipeSelector = ({ onRecipesChange }) => {
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleSelection = (recipe) => {
    const updatedRecipes = selectedRecipes.includes(recipe)
      ? selectedRecipes.filter((item) => item !== recipe)
      : [...selectedRecipes, recipe];
    setSelectedRecipes(updatedRecipes);
    onRecipesChange(updatedRecipes);
  };

  return (
    <div>
      <h2>Select Recipes</h2>
      <ul>
        {Object.keys(recipesData).map((recipe) => (
          <li key={recipe}>
            <label>
              <input
                type="checkbox"
                value={recipe}
                checked={selectedRecipes.includes(recipe)}
                onChange={() => handleSelection(recipe)}
              />
              {recipe}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSelector;
