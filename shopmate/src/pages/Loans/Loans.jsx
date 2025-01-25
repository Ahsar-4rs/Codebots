import React, { useEffect, useState } from 'react'
import './Loans.css'
const Loans = () => {
    const [form,setForm]=useState("inactive");

    const [operation,setOperation]=useState("")
     const [loan,setLoan]=useState({
        username:"",
        Amount:0
     });
      const getLoan = async () => {
        const token = localStorage.getItem('auth-token');
      console.log("Fetching loan with token:", token); // Debug log
        try {
            const response = await fetch('http://localhost:3000/getloan', {
                method: 'GET',
                headers: {
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                }
            });
    
            const data = await response.json();
            if (data.success) {
                console.log("Loan Data:", data.loan);
                // Set the loan state
                setLoan({
                    username: data.loan.username,
                    Amount: data.loan.Amount
                });
            } else {
                // Only alert if the response indicates failure
                if (data.message) {
                    alert(data.message);  // Display the error message from the server
                }
            }
        } catch (error) {
            console.error("Error fetching loan:", error);
            alert("An error occurred while fetching the loan");
        }
    };
  
    useEffect(() => {
        // Fetch the loan data when the component mounts
        getLoan();
    },[]);
     const changeHandler=(e)=>{
        setLoan({...loan,[e.target.name]:e.target.value});
    }
    const addloan=async()=>{
        console.log("loan Added",loan);
        let responseData;
        fetch('http://localhost:3000/addloan',{
            method:'PUT',
            headers:{
                Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
            },
            body:JSON.stringify(loan),
        }).then((response)=>response.json()).then((data)=>data.success?alert("Loan Amount Added"):alert("Failed"))
        setForm("inactive");
    }

    const removeloan=async()=>{
        console.log("loan removed",loan);
        
        fetch('http://localhost:3000/removeloan',{
            method:'PUT',
            headers:{
                Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
            },
            body:JSON.stringify(loan),
        }).then((response)=>response.json()).then((data)=>data.success?alert("Loan Amount Removed"):alert("Failed due to Insufficient Prepaid Amount"))
        setForm("inactive");
    }


  return (
    <div className='loan-view'>
      <h1>Loan Details</h1>
        <div className="loan-details">
            <div className="username-loan">
            <p >Username:</p><p>{loan.username}</p>
            </div>
            <div className="Amount-loan">
            <p >Available Loan Amount:</p><p>{loan.Amount}</p>
            </div>
        
        
        </div>
      
      <div className="action-btn">
      <button onClick={()=>{setForm("active");setOperation("Add")}}>Add Loan Amount</button>
      <button onClick={()=>{setForm("active");setOperation("Sub")}}>Withdraw Amount</button>
      </div>
      {form==="active"?
      <div className='add-loan'>
      <div className="addloan-itemfield">
        <p>Username</p>
        <input value={loan.username} onChange={changeHandler}  type='text' name='username' placeholder='Type Here'/>
      </div>
        
        <div className="addloan-itemfield">
            <p>Amount</p>
            <input  value={loan.Amount} onChange={changeHandler} type='text' name='Amount' placeholder='Type Here'/>
        </div>
        {operation==="Add"?<button className='addloan-btn' onClick={()=>addloan()}>Add</button>:<button className='addloan-btn' onClick={()=>removeloan()}>Withdraw</button>}
        
        
    </div>:<div></div>}
      
    </div>
  )
}

export default Loans
