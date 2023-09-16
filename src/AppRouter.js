import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Component/LoginForm';
import RegisterForm from './Component/RegisterForm';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
