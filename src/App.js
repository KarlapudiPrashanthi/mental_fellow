import './App.css';
import React, { useState } from 'react';
import BreakFast from './components/BreakFast';
import Lunch from './components/Lunch';
import Dinner from './components/Dinner';
import Quickmeals from './components/Quickmeals';
import Login from './components/Login';
import sidebar from './components/sidebar'; // Import Sidebar component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Register from './components/Register';
import GroceriesList from './components/GroceriesList';
import RecipeSelector from './components/RecipeSelector';
import Chatbot from './components/Chatbot';

const App = () => {
  const [user, setUser] = useState(null); // State for managing logged-in user
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  return (
    <Router>
      <div className="app-container">
        <sidebar /> {/* Sidebar will be rendered on every page */}
        
        <div className="main-content">
          <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/main" element={<Main />} />
            <Route path="/breakfast" element={<BreakFast />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/dinner" element={<Dinner />} />
            <Route path="/register" element={<Register />} />
            <Route path="/quickmeals" element={<Quickmeals />} />
            <Route path="/grocerieslist" element={<GroceriesList/>}/>
            <Route path="/RecipeSelector" element={<RecipeSelector/>}/>
            <Route path="/Chatbot" element={<Chatbot/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
