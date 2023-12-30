//HomePage.js
import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from './ThemeContext';
import { useNavigate } from 'react-router-dom'; 

const HomePage = () => {
  const { darkTheme, toggleTheme } = useTheme();
  const navigate = useNavigate();  // Use useNavigate hook

  const handleLoginClick = () => {
    // Navigate to the login page when the login button is clicked
    navigate('/login');
  };

  const handleRegisterClick = () => {
    // Navigate to the register page when the register button is clicked
    navigate('/register');
  };

  return (
    <div style={{ background: darkTheme ? '#333' : '#fff', color: darkTheme ? '#fff' : '#333',
    height: '100vh', // Set the height to full viewport height
    display: 'flex', // Set display to flex
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center'}}>
      <h2>WELCOME TO HEALTHMINDS</h2>
      <Button variant="contained" color="primary" onClick={handleLoginClick}>
        Login
      </Button><br></br>
      <Button variant="contained" color="secondary" onClick={handleRegisterClick}>
        Register
      </Button><br></br>
      <h2>EXPLORE YOUR BODY WITH US</h2>
    </div>
  );
};

export default HomePage;
