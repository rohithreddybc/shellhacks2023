import React, { useState } from 'react'
import axios from 'axios'

function StudentRequestFund(){
    const [funds, setFunds] = useState(0)
    const [studEmail, setStudEmail] = useState('')
    const [reasonForFunding, setReason] = useState('')
    const [gpa, setGpa] = useState(0)
    const API_BASE_URL = 'http://localhost:8080/api/users'
    const API_UNIVERSITY_URL = 'http://10.108.128.233:8080/student/request'

    const handleChange = (val) => {
        console.log(val)
        console.log("Before setting funds " + funds)
        setFunds(val.target.value)
        console.log("After setting funds " + funds)
    }

    const handleEmailChange = async (val) => {
        try{
            setStudEmail(val.target.value)
            //const response = await axios.post(API_BASE_URL, {studEmail})
            //return response.data
        } catch( error ){
            console.error('Error retrieving data using handleEmailChange() ', error)
            throw error
        }
    }

    const handleFundRequest = async () => {
        try{
            const request = createFormRequest()
            const response = await axios.post(API_UNIVERSITY_URL, {request})
            console.log(response.data)
            return response.data
        } catch( error ){
            console.error("We are receiving the following error in handleFundRequest() "+ error)
            throw error
        }
    }

    const handleReasonChange = (val) => {
        console.log("The handleReasonChange() is called ")
        setReason(val.target.value)
    }

    const handleGpaChange = (val) => {
        console.log("The handleGpaChange() is called ")
        setGpa(val.target.value)
    }

    const createFormRequest = () => {
        try{
            const request = {
                "username": studEmail,
                "fundingReason":reasonForFunding,
                "fundingAmount":funds,
                "gpa":gpa
            }
            console.log(request)
            return request
        } catch ( error ) {
            console.log("The error in createFormRequest is " + error)
        }
    }

    return (
        <>  
            <div>
                <h2>Request Funds</h2>
                
                <label>Funds Required: </label>
                <input
                    type="text"
                    id="funds"
                    name="funds"
                    value={funds}
                    onChange={handleChange}
                    required
                    ></input>
                <label>University Email: </label>
                <input
                    type="text"
                    id="student-email"
                    name="student-email"
                    value={studEmail}
                    onChange={handleEmailChange}
                    required
                    ></input>
                <label>Reason: </label>
                <input 
                    type="text"
                    id="funding-reason"
                    name="funding-reason"
                    value={reasonForFunding}
                    onChange={handleReasonChange}
                    required></input>
                <label>GPA: </label>
                <input
                    type="text"
                    id="gpa"
                    name="gpa"
                    value={gpa}
                    onChange={handleGpaChange}
                    required
                    ></input>
                <button type="submit" onClick={handleFundRequest}>Request Fund</button>
                
            </div>
        </>
    );
}

export default StudentRequestFund;