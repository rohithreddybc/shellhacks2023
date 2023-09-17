import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function DonorHome() {
    const [studEmail , setStudEmail] = useState('')
    const navigate = useNavigate()

    return(
        <>
            <h2>Donor Home Page</h2>
            <label value="name" id="name">Name</label>
            <input type="text" value="Tobey Grefale" readOnly/>
            <table>
                <thead>
                    <th>Student Name</th>
                    <th>Amount</th>
                    <th>University</th>
                    <th>GPA</th>
                    <th>Reason</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Glen Moore</td>
                        <td>1000</td>
                        <td>FIU</td>
                        <td>4</td>
                        <td>Poverty</td>
                        <td onClick={() => navigate('/student/fundMe/'+{studEmail})}>Fund Me</td>
                    </tr>
                    <tr>
                        <td>Barbara Kruz</td>
                        <td>1000</td>
                        <td>FIU</td>
                        <td>3.7</td>
                        <td>Poverty</td>
                        <td onClick={() => navigate('/student/fundMe/'+{studEmail})}>Fund Me</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default DonorHome;