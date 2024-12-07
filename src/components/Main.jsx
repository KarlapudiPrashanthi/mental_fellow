import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.webp';

function Main() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar state
  const [content, setContent] = useState("Welcome to the Smart Recipe Recommendation System"); // Default content
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  // Simulate dynamic content change for sidebar navigation
  const changeContent = (newContent) => {
    setContent(newContent); // Set new content for the main page
  };

  return (
    <div className="main-container">
      {/* Header Section */}
      <header className="icon-bar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="title">
          <h1>Smart Recipe Recommendation System</h1>
        </div>
        <div className="nav-buttons">
          <button className="nav-button">About</button>
          <button className="nav-button" onClick={() => handleNavigation('/')}>Home</button>
          <button className="nav-button">Services</button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        
      </header>

      {/* Sidebar Section */}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul className="sidebar-list">
          <li>
            <button className="sidebar-button" onClick={() => {handleNavigation('/breakfast'); changeContent('Breakfast Recipes');}}>Breakfast</button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => {handleNavigation('/quickmeals'); changeContent('Quick Meals Recipes');}}>Quick Meals</button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => {handleNavigation('/lunch'); changeContent('Lunch Recipes');}}>Lunch</button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => {handleNavigation('/dinner'); changeContent('Dinner Recipes');}}>Dinner</button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => {handleNavigation('/grocerieslist'); changeContent('Groceries List');}}>GroceriesList</button>
          </li>
          <li>
            <button className="sidebar-button" onClick={() => {handleNavigation('/Chatbot'); changeContent('Chat bot');}}>Chatbot</button>
          </li>
        </ul>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>

      {/* Main Content Section */}
      <div className="content">
        <h2>{content}</h2>
        <p>Explore different categories from the sidebar to view the recipes!</p>
      </div>
    </div>
  );
}

export default Main;
