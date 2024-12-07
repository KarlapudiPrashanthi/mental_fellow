import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Grid,
  Typography,
  List,
  ListItem,
  Button,
  FormControlLabel,
  Divider,
} from "@mui/material";

const recipesData = {
  Pancakes: ["Flour-100g", "Eggs-2", "Milk-70 ml", "Butter-5g", "Sugar-100g"],
  Spaghetti: ["Pasta-2 pack", "Tomato Sauce", "Garlic", "Olive Oil", "Basil"],
  Salad: ["Lettuce", "Tomatoes", "Cucumbers", "Carrots", "Dressing"],
  Sandwich: ["Bread", "Cheese", "Lettuce", "Ham"],
  GrilledCheeseSandwich: ["Bread", "Cheese", "Butter"],
  Pasta: ["Tomato-2", "Cucumber", "Olives", "Feta Cheese", "Olive Oil", "Lemon Juice"],
  VeggieWrap: ["Tortilla", "Lettuce", "Cucumber", "Avocado", "Hummus"],
  ChickenCaesarSalad: [
    "Chicken Breast",
    "Lettuce",
    "Croutons",
    "Parmesan Cheese",
    "Caesar Dressing",
  ],
  VeggieBurger: ["Veggie Patty", "Bun", "Lettuce", "Pickles", "Ketchup"],
  Tacos: ["Taco Shells", "Ground Beef", "Lettuce", "Cheese", "Sour Cream"],
  Smoothie: ["Banana", "Strawberries", "Yogurt", "Honey", "Almond Milk"],
  Omelette: ["Eggs", "Cheese", "Onion", "Spinach", "Salt", "Pepper"],
};

const GroceriesList = () => {
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleSelection = (recipe) => {
    const updatedRecipes = selectedRecipes.includes(recipe)
      ? selectedRecipes.filter((item) => item !== recipe)
      : [...selectedRecipes, recipe];
    setSelectedRecipes(updatedRecipes);
  };

  const generateGroceryList = () => {
    const allIngredients = selectedRecipes
      .flatMap((recipe) => recipesData[recipe])
      .filter((item, index, arr) => arr.indexOf(item) === index); // Remove duplicates
    return allIngredients;
  };

  const groceryList = generateGroceryList();

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Grocery List Generator
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Recipe Selection Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Select Recipes
              </Typography>
              <List>
                {Object.keys(recipesData).map((recipe) => (
                  <ListItem key={recipe} disableGutters>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedRecipes.includes(recipe)}
                          onChange={() => handleSelection(recipe)}
                          color="primary"
                        />
                      }
                      label={recipe}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Grocery List Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Grocery List
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              {groceryList.length > 0 ? (
                <List>
                  {groceryList.map((ingredient, index) => (
                    <ListItem key={index}>{ingredient}</ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body1" color="textSecondary">
                  No recipes selected.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box textAlign="center" marginTop={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => alert("Enjoy your cooking!")}
        >
          Generate
        </Button>
      </Box>
    </Box>
  );
};

export default GroceriesList;
