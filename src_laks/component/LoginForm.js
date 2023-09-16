import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here (e.g., send data to a server).
    console.log('Form submitted with data:', formData);
  };

  const handleNavigateToSignUpStudent = () => {
    navigate('/register');
  };
  const handleNavigateToSignUpDonor = () => {
    navigate('/registerDonorForm');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const paperStyle = {padding:20, height:'70vh', margin:"20px auto"}

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <button onClick={handleNavigateToSignUpStudent}>Sign Up as Student</button>
        <button onClick={handleNavigateToSignUpDonor}>Sign Up as Donor</button>
      </div>      
    </div>

  );
}

export default LoginForm;