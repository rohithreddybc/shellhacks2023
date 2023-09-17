import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async() => {
    try{
      const request = createFormRequest()
      console.log(request)
      const response = await axios.post("http://localhost:8080/api/users", {request})

      localStorage.setItem("userName", userName)
      
      return response.data
    } catch( error ){
        console.error("We are receiving the following error in handleFundRequest() "+ error)
        throw error
    }
  };

  const handleUsername = async(value) => {
    try{
      setUsername(value.target.value)
    } catch( error ){
        console.error('Error retrieving data using handleUsername() ', error)
        throw error
    }
  };

  const handlePassword = async(value) => {
    try{
      setPassword(value.target.value)
    } catch( error ){
        console.error('Error retrieving data using handlePassword() ', error)
        throw error
    }
  };

  const createFormRequest = () => {
    try{
        const request = {
            "username": username,
            "password":password,
        }
        console.log(request)
        return request
    } catch ( error ) {
        console.log("The error in createFormRequest is " + error)
    }
  }

  const navigate = useNavigate();

  const handleNavigateToSignUpStudent = () => {
    navigate('/register');
  };
  const handleNavigateToSignUpDonor = () => {
    navigate('/registerDonorForm');
  };

  const paperStyle = {padding:20, height:'70vh', margin:"20px auto"}

  return (
    <div className="main-div">
      <h2>Login</h2>
      <form className="login-form " onSubmit={handleSubmit} >
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsername}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        <button type="submit">Login</button>
      
      <div>
        <button className="button" type="submit" onClick={handleNavigateToSignUpStudent}>Sign Up as Student</button>
        <button className="button" type="submit" onClick={handleNavigateToSignUpDonor}>Sign Up as Donor</button>
      </div> 
      </form>     
    </div>

  );
}

export default LoginForm;
