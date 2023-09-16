import React, { useState } from 'react'
import axios from 'axios'

function StudentRequestFund(){
    const [funds, setFunds] = useState(0)
    const [studEmail, setStudEmail] = useState('')
    const [reasonForFunding, setReason] = useState('')
    const API_BASE_URL = 'http://localhost:8080/api/users'
    const API_UNIVERSITY_URL = 'http://localhost:8080/api/univ'

    const handleChange = (val) => {
        console.log("The value is to be changed " + val)
        setFunds(val)
    }

    const handleEmailChange = async (val) => {
        try{
            setStudEmail(val)
            const response = await axios.post(API_BASE_URL, {studEmail})
            return response.data
        } catch( error ){
            console.error('Error retrieving data using handleEmailChange() ', error)
            throw error
        }
    }

    const handleFundRequest = async () => {
        try{
            const request = createFormRequest()
            const response = await axios.post(API_UNIVERSITY_URL, {request})
            return response.data
        } catch( error ){
            console.error("We are receiving the following error in handleFundRequest() "+ error)
            throw error
        }
    }

    const handleReasonChange = (val) => {
        console.log("The handleReasonChange() is called ")
        setReason(val)
    }

    const createFormRequest = async () => {
        try{
            const email = {studEmail}
            return email
        } catch ( error ) {

        }
    }

    return (
        <>  
            <div>
                <h2>Request Funds</h2>
                <form>
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
                <button type="submit" onClick={handleFundRequest}>Request Fund</button>
                </form>
            </div>
        </>
    );
}

export default StudentRequestFund;