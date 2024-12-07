import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    image: "https://example.com/spaghetti.jpg",
    description: "A classic Italian pasta dish with a rich and savory meat sauce.",
    method: [
      "Cook the spaghetti according to the package instructions. Drain and set aside.",
      "In a large skillet, sauté the onion and garlic until fragrant.",
      "Add the ground beef and cook until browned.",
      "Stir in the canned tomatoes, tomato paste, oregano, salt, and pepper. Simmer for 10-15 minutes.",
      "Serve the sauce over the spaghetti and top with grated Parmesan cheese."
    ],
  },
  {
    id: 2,
    title: "Grilled Chicken Salad",
    image: "https://example.com/chickensalad.jpg",
    description: "A refreshing salad with grilled chicken, fresh greens, and a tangy dressing.",
    method: [
      "Season the chicken breasts with salt and pepper. Grill over medium heat until fully cooked, then slice.",
      "In a large bowl, combine the greens, cucumber, tomatoes, and feta cheese.",
      "Whisk together the olive oil and balsamic vinegar for the dressing.",
      "Top the salad with sliced chicken and drizzle with the dressing before serving."
    ],
  },
  {
    id: 3,
    title: "Vegetable Stir-Fry with Tofu",
    image: "https://example.com/vegetablestirfry.jpg",
    description: "A healthy and colorful stir-fry with tofu and mixed vegetables.",
    method: [
      "Heat sesame oil in a wok or large skillet over medium heat. Add the garlic and tofu, cooking until golden.",
      "Add the vegetables and stir-fry for 5-7 minutes until tender.",
      "Mix soy sauce with cornstarch and a little water. Pour over the stir-fry and cook until the sauce thickens.",
      "Serve hot, optionally over steamed rice or noodles."
    ],
  },
  {
    id: 4,
    title: "Beef Tacos",
    image: "https://example.com/beeftacos.jpg",
    description: "Flavorful tacos filled with spiced ground beef and fresh toppings.",
    method: [
      "Brown the ground beef in a skillet and drain excess fat.",
      "Add taco seasoning and a small amount of water, stirring until combined.",
      "Warm the taco shells in the oven or microwave.",
      "Fill the shells with beef, lettuce, cheese, tomatoes, and sour cream.",
      "Serve with salsa and lime wedges."
    ],
  },
  {
    id: 5,
    title: "Chicken Alfredo Pasta",
    image: "https://example.com/chickenalfredo.jpg",
    description: "Creamy Alfredo sauce with tender chicken over fettuccine pasta.",
    method: [
      "Cook fettuccine according to package instructions. Drain and set aside.",
      "In a skillet, sauté chicken pieces until fully cooked. Remove from the pan.",
      "In the same skillet, melt butter and stir in garlic until fragrant.",
      "Add heavy cream and Parmesan cheese, stirring until the sauce thickens.",
      "Toss the pasta and chicken in the sauce and serve hot."
    ],
  },
  {
    id: 6,
    title: "Vegetarian Chili",
    image: "https://example.com/vegetarianchili.jpg",
    description: "A hearty and spicy chili with beans and vegetables.",
    method: [
      "In a pot, sauté onion, bell pepper, and garlic until soft.",
      "Add canned tomatoes, kidney beans, black beans, and corn.",
      "Stir in chili powder, cumin, salt, and pepper.",
      "Simmer the chili for 20 minutes, stirring occasionally.",
      "Serve with shredded cheese and a dollop of sour cream."
    ],
  },
  {
    id: 7,
    title: "Lemon Herb Salmon",
    image: "https://example.com/lemonsalmon.jpg",
    description: "A simple and flavorful baked salmon with fresh herbs and lemon.",
    method: [
      "Preheat the oven to 375°F (190°C).",
      "Place salmon fillets on a baking sheet lined with parchment paper.",
      "Season with salt, pepper, minced garlic, and chopped parsley.",
      "Place lemon slices on top and bake for 15-20 minutes.",
      "Serve with a side of steamed vegetables or rice."
    ],
  },
  {
    id: 8,
    title: "Stuffed Bell Peppers",
    image: "https://example.com/stuffedpeppers.jpg",
    description: "Bell peppers filled with a savory mixture of rice, meat, and spices.",
    method: [
      "Cut the tops off the bell peppers and remove seeds.",
      "Cook ground beef with onion, garlic, and diced tomatoes.",
      "Mix the beef mixture with cooked rice and season with salt, pepper, and paprika.",
      "Stuff the peppers with the mixture and place them in a baking dish.",
      "Bake at 375°F (190°C) for 25-30 minutes."
    ],
  },
  
];



export default function Breakfast() {
  const [expanded, setExpanded] = useState(Array(recipes.length).fill(false));
  const [likedRecipes, setLikedRecipes] = useState([]);
  const navigate = useNavigate();

  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const handleLike = (recipe) => {
    if (likedRecipes.includes(recipe.id)) {
      // Remove from liked if already liked
      setLikedRecipes(likedRecipes.filter((id) => id !== recipe.id));
    } else {
      // Add to liked
      setLikedRecipes([...likedRecipes, recipe.id]);
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
      {recipes.map((recipe, index) => (
        <Card key={recipe.id} sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar>{recipe.title.charAt(0)}</Avatar>}
            title={recipe.title}
          />
          <CardMedia
            component="img"
            height="194"
            image={recipe.image}
            alt={recipe.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {recipe.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton onClick={() => handleLike(recipe)}>
              <FavoriteIcon color={likedRecipes.includes(recipe.id) ? 'error' : 'inherit'} />
            </IconButton>
            <Button
              onClick={() => handleExpandClick(index)}
              aria-expanded={expanded[index]}
              aria-label="show method"
              endIcon={<ExpandMoreIcon />}
            >
              {expanded[index] ? 'Show Less' : 'Show Method'}
            </Button>
          </CardActions>
          <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="h6">Method:</Typography>
              {recipe.method.map((step, stepIndex) => (
                <div key={stepIndex}>{stepIndex + 1}. {step}</div>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}
