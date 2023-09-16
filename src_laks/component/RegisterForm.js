import React, { useEffect, useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {

    // useEffect(() => {
    
    // }, [])

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
    
    const handleNavigateToAnotherComponent = () => {
        navigate('/');
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const [checkboxes, setCheckboxes] = useState({
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
      });
    
      // Handle checkbox change
      const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
      };

    return (

        <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <p style={{color:"red"}}>* indicates the required fields</p>
            <div>
            <label htmlFor="name">Full Name*</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label htmlFor="email">Educational Email*</label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>           
            <div>
            <label htmlFor="email">University Name*</label>
            <input
                type="text"
                id="uname"
                name="uname"
                value={formData.uname}
                onChange={handleChange}
                required
            />
            </div>           
            <div>
            <label htmlFor="email">University ID*</label>
            <input
                type="text"
                id="uid"
                name="uid"
                value={formData.uid}
                onChange={handleChange}
                required
            />
            </div>           
            <div>
            <label htmlFor="username">Username*</label>
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
            <label htmlFor="password">Password*</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            </div>
            
            <div>
                <p required>Identify your race:(you can choose more than if applicable)*</p>
                <label>
                    American Indian or Alaska Native
                    <input
                    type="checkbox"
                    name="AIAN"
                    checked={checkboxes.AIAN || false}
                    onChange={handleCheckboxChange}
                    />
                </label>

                <label>
                    Asian
                    <input
                    type="checkbox"
                    name="AN"
                    checked={checkboxes.AN || false}
                    onChange={handleCheckboxChange}
                    />
                </label>

                <label>
                    Black or African American
                    <input
                    type="checkbox"
                    name="BAA"
                    checked={checkboxes.BAA || false}
                    onChange={handleCheckboxChange}
                    />
                </label>

                <label>
                    Native Hawaiian or Other Pacific Islander
                    <input
                    type="checkbox"
                    name="NHPH"
                    checked={checkboxes.NHPH || false}
                    onChange={handleCheckboxChange}
                    />
                </label>

                <label>
                    White
                    <input
                    type="checkbox"
                    name="Wh"
                    checked={checkboxes.Wh || false}
                    onChange={handleCheckboxChange}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div>
            <button onClick={handleNavigateToAnotherComponent}>Cancel</button>
        </div>
        </div>

    )
}

 export default RegisterForm;
