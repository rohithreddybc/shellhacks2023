import React, { useState } from 'react'
import axios from 'axios'

function StudentFundHistory() {
    const [historyData, setHistoryData] = useState([]);

    return( 
        <>
            <h1>Fund History</h1>
            <table>
                <thead>
                <tr>
                    <th>Donor Name</th>
                    <th>Amount Donated</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {historyData.map((record, index) => (
                    <tr key={index}>
                    <td>{record.donorName}</td>
                    <td>{record.amount}</td>
                    <td>{record.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default StudentFundHistory;