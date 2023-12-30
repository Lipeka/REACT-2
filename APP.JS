import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components login/LoginComponent';
import RegistrationComponent from './components reg/RegistrationComponent';
import HomePage from './components extra/HomePage';  // Import your HomePage component
import { ThemeProvider } from './components extra/ThemeContext';
import { NavigationProvider } from './components extra/NavigationContext';
import HomeComponent from './components home/HomeComponent';

// App component
const App = () => {
  const handleLogin = (credentials) => {
    // Implement your login logic here
    console.log('Login credentials:', credentials);
  };

  const handleCancel = () => {
    // Implement your cancel logic here
    console.log('Login canceled');
  };

  const handleRegister = (credentials) => {
    // Implement your registration logic here
    console.log('Registration credentials:', credentials);
    // You might want to redirect the user to a different page after successful registration
  };

  return (
    <ThemeProvider>
      <NavigationProvider>
        <Router>
          <Routes>
          <Route path="/" element={<HomePage />} /> 
            <Route path="/login" element={<LoginComponent onLogin={handleLogin} onCancel={handleCancel} />} />
            <Route path="/register" element={<RegistrationComponent onRegister={handleRegister} onCancel={handleCancel} />} />
            <Route path="/home" element={<HomeComponent/>} />
          </Routes>
        </Router>
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
