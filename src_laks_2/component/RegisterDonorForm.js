import React, { useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function RegisterDonorForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async() => {
        try{
          const request = createFormRequest()
          const response = await axios.post("http://localhost:8080/api/user/create", {request})
          return response.data
        } catch( error ){
            console.error("We are receiving the following error in handleFundRequest() "+ error)
            throw error
        }
      };


    const createFormRequest = () => {
        try{
            const request = {
                "name": name,
                "email": email,
                "username": username,
                "password": password
            }
            console.log(request)
            return request
        } catch ( error ) {
            console.log("The error in createFormRequest is " + error)
        }
    }

    const handleNameChange = async(value) => {
        try{
            setName(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
    };

    const handleEmailChange = async(value) => {
        try{
            setEmail(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
    };

    const handleUsernameChange = async(value) => {
        try{
            setUsername(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
    };

    const handlePasswordChange = async(value) => {
        try{
            setPassword(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
    };


    const navigate = useNavigate();

    const handleNavigateToAnotherComponent = () => {
        navigate('/');
    };

    return (

        <div>
        <h2>Donor Registration</h2>
        <form onSubmit={handleSubmit}>
            <p style={{color:"red"}}>* indicates the required fields</p>
            <div>
            <label htmlFor="name">Full Name*</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                required
            />
            </div>
            <div>
            <label htmlFor="email">Educational Email*</label>
            <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
            </div>  
            <div>
            <label htmlFor="username">Username*</label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                required
            />
            </div>
            <div>
            <label htmlFor="password">Password*</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
            </div>
            <button type="submit">Submit</button>
        </form>
        <div>
            <button onClick={handleNavigateToAnotherComponent}>Cancel</button>
        </div>
        </div>
    )
}

 export default RegisterDonorForm;
