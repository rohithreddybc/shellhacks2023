import React, { useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function RegisterDonorForm() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

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

                "username": username,
                "password": password,
                "confirmPassword": confirmPassword,
                "role": "ROLE_DONOR",
                "active": true,
                "phoneNumber": phoneNumber,
                "name": name
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

    const handleConfirmPasswordChange = async(value) => {
        try{
            setConfirmPassword(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
    };

    const handlePhoneNumberChange = async(value) => {
        try{
            setPhoneNumber(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
    };

    const navigate = useNavigate();

    const handleNavigateToSignIn = () => {
        navigate('/');
    };

    return (

        <div>
        <h2>Donor Registration</h2>

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
            <label htmlFor="username">Email*</label>
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
            <div>
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input
                type="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
            />
            </div>
            <div>
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input
                type="phoneNumber"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
            />
            </div>

            <button type="submit" onClick={handleSubmit}>Submit</button>
        <div>
            <button onClick={handleNavigateToSignIn}>Cancel</button>
        </div>
        </div>
    )
}

 export default RegisterDonorForm;
