import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Component/LoginForm';
import RegisterForm from './Component/RegisterForm';
import StudentRequestFund from './Component/StudentRequestFund';
import StudentHome from './Component/StudentHome'
import StudentFundHistory from './Component/StudentFundHistory';
import DonorHome from './Component/DonorHome';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/student/studentRequestFund" element={<StudentRequestFund />} />
        <Route path="/student" element={<StudentHome />} />
        <Route path="/student/fund-history" element={<StudentFundHistory/>} />
        <Route path="/student/fund-me/:studentEmail" element={<StudentFundHistory/>} />
        <Route path="/donor" element={<DonorHome />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
