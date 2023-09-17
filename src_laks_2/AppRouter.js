import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import RegisterDonorForm from './component/RegisterDonorForm';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/registerDonorForm" element={<RegisterDonorForm />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
