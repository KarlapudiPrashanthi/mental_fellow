

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(0);
  const [selectedMeal, setSelectedMeal] = useState("");
  const [dietaryPreference, setDietaryPreference] = useState("");

  const questions = [
    "Hi! What meal are you looking for? (breakfast, lunch, dinner)",
    "Do you have any dietary preferences? (vegetarian, non-vegetarian, vegan)",
    "How much time do you have to cook? (e.g., 15 minutes, 30 minutes, 1 hour)",
  ];

  const recipes = {
    breakfast: {
      vegetarian: ["Vegetable Poha", "Aloo Paratha", "Fruit Salad"],
      nonVegetarian: ["Egg Sandwich", "Chicken Sausage Omelette", "Salmon Bagel"],
      vegan: ["Vegan Pancakes", "Tofu Scramble", "Chia Pudding"],
    },
    lunch: {
      vegetarian: ["Paneer Butter Masala", "Vegetable Biryani", "Rajma Chawal"],
      nonVegetarian: ["Chicken Curry", "Fish Tacos", "Beef Stir-Fry"],
      vegan: ["Vegan Buddha Bowl", "Quinoa Salad", "Lentil Soup"],
    },
    dinner: {
      vegetarian: ["Matar Paneer", "Vegetable Stir-Fry", "Dal Tadka with Rice"],
      nonVegetarian: ["Grilled Chicken", "Prawn Curry", "Roast Duck"],
      vegan: ["Stuffed Bell Peppers", "Vegan Pasta", "Sweet Potato Curry"],
    },
  };

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);

    if (step === 0) {
      const mealType = userInput.toLowerCase();
      if (recipes[mealType]) {
        setSelectedMeal(mealType);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: `Great! ${questions[1]}` },
        ]);
        setStep(1);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Please choose between breakfast, lunch, or dinner." },
        ]);
      }
    } else if (step === 1) {
      const preference = userInput.toLowerCase();
      if (["vegetarian", "non-vegetarian", "vegan"].includes(preference)) {
        setDietaryPreference(preference);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: `Got it! ${questions[2]}` },
        ]);
        setStep(2);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Please specify vegetarian, non-vegetarian, or vegan." },
        ]);
      }
    } else if (step === 2) {
      const mealType = selectedMeal;
      const preference = dietaryPreference;
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: `Here are some ${mealType} recipes (${preference}): ${recipes[mealType][
            preference
          ].join(", ")}.`,
        },
      ]);
      setStep(0); // Restart the conversation
      setSelectedMeal("");
      setDietaryPreference("");
    }

    setUserInput(""); // Clear the input field
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "auto",
        mt: 4,
        p: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h6" textAlign="center" gutterBottom>
        Recipe Chatbot
      </Typography>
      <Paper
        sx={{
          height: "300px",
          overflowY: "auto",
          p: 2,
          backgroundColor: "#e8f5e9",
        }}
      >
        {messages.map((msg, index) => (
          <Typography
            key={index}
            sx={{
              textAlign: msg.sender === "user" ? "right" : "left",
              color: msg.sender === "user" ? "#4caf50" : "#1e88e5",
              mb: 1,
            }}
          >
            {msg.text}
          </Typography>
        ))}
      </Paper>
      <Box sx={{ display: "flex", mt: 2 }}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Type your message here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSend}
          sx={{ ml: 1 }}
        >
          Send
        </Button>
      </Box>
      {step === 0 && (
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {questions[0]}
        </Typography>
      )}
    </Box>
  );
};

export default Chatbot;
