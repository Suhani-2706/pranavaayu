import React from "react"
import user_icon from './Assets/person.png';
import email_icon from "./Assets/email.png";
import psswd_icon from './Assets/password.png';
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
function OTP(){
    const [email,setEmail]=useState("")
    const [otp,setOtp]=useState("")
    const [next,setNext] =useState(false) //should be allowed to go to next page or not
    async function submits() {
        try {
        const response = await axios.post(
          "https://pranavaayu-backend.onrender.com/api/register",
          {
            email:email,
            code:otp,
          },
          {
            headers: {
              "Content-Type": "application/json"
            },
          }
        );
      
        if (response.data.message === "Successfully registered user") {
          alert("User registered successfully");
          setNext(true);
        } else {
          console.error("Error registering user:", response.data.error);
          console.log("Server Response:", response);
  
          alert("Error registering user");
        }
      } catch (error) {
        console.error("Error during user registration:", error);
      
        if (error.response) {
          // The error is related to the server response
          if (error.response.data && error.response.data.message) {
            // The server responded with an error message
            alert(error.response.data.message);
          } else {
            // The server response does not contain the expected structure
            alert("Unexpected server response. Please try again.");
          }
        } else {
          // The error is not related to the server response
          alert("Error during user registration. Please try again.");
        }
      }
    }

    async function resend() {
        try {
        const response = await axios.post(
          "https://pranavaayu-backend.onrender.com/api/resendVerificationLink",
          {
            email:email,
          },
          {
            headers: {
              "Content-Type": "application/json"
            },
          }
        );
      
        if (response.data.message === "Successfully registered user") {
          alert("User registered successfully");
          setNext(true);
        } else {
          console.error("Error registering user:", response.data.error);
          console.log("Server Response:", response);
  
          alert("Error registering user");
        }
      } catch (error) {
        console.error("Error during user registration:", error);
      
        if (error.response) {
          // The error is related to the server response
          if (error.response.data && error.response.data.message) {
            // The server responded with an error message
            alert(error.response.data.message);
          } else {
            // The server response does not contain the expected structure
            alert("Unexpected server response. Please try again.");
          }
        } else {
          // The error is not related to the server response
          alert("Error during user registration. Please try again.");
        }
      }
    }
    return(
        <div className="container">
            <div className="header">
                <div className="text">Verify OTP</div>
                <div className="underline"></div>
            </div>
         <div className="inputs">
            <div className="input">
                <input type="email" placeholder="Email ID" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <input type="text" placeholder="Enter OTP" onChange={(e)=>setOtp(e.target.value)}/>
            </div>
         </div>
         <div className="forgot-password" onClick={()=>resend()} style={{marginBottom:"20px", paddingLeft:"7px"}}><span>Resend OTP</span></div> 
         {next ===true?<Link to="/Login">
            <div className="submitFinal" onClick={()=> submits}>submit</div></Link>: 
            <Link to="/VerifyOTP"><div className="submitFinal" onClick={()=> submits}>submit</div></Link>} 
        </div>
    );
}

export default OTP;