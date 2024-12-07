// Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul className="sidebar-list">
        <li>Breakfast</li>
        <li>Quick Meals</li>
        <li>Lunch</li>
        <li>Dinner</li>
        <li>Groceries List </li>
        <li>Chat bot</li>
      </ul>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default Sidebar;
