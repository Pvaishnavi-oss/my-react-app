// src/App.js
import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './Mainpage'; 


function App() {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

export default App;
