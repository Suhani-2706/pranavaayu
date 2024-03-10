import React from "react"
import user_icon from './Assets/person.png';
import email_icon from "./Assets/email.png";
import psswd_icon from './Assets/password.png';
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Login(){
    const [action,setAction]=useState("Login")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [psswd,setPsswd]=useState("")
    const [next,setNext] =useState(false) //should be allowed to go to next page or not
    async function submits() {
        try {
        const response = await axios.post(
          "https://pranavaayu-backend.onrender.com/api/register",
          {
            username: name,
            password: psswd,
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

    async function logins() {
        try {
        const response = await axios.post(
          "https://pranavaayu-backend.onrender.com/api/login",
          {
            email:email,
            password: psswd,
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
      // <div className="container d-flex justify-content-center align-items-center min-vh-100 min-height-80">
      //       <div className="row border rounded-5 p-3 bg-white shadow box-area">
      //           <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#103cbe' }}>
      //               <div className="featured-image mb-3">
      //                   <img src="images/1.png" className="img-fluid" style={{ width: '250px' }} alt="featured" />
      //               </div>
      //               <p className="text-white fs-2" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: '600' }}>Be Verified</p>
      //               <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: 'Courier New, Courier, monospace' }}>Join experienced Designers on this platform.</small>
      //           </div>
      //           <div className="col-md-6 right-box">
      //               <div className="row align-items-center">
      //                   <div className="header-text mb-4">
      //                       <h1>{action}</h1>
      //                   </div>
      //                   {action=="Login"?<div></div>:
      //                   <div className="input-group mb-3">
      //                       <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Name" />
      //                   </div>
      //                   }
      //                   <div className="input-group mb-3">
      //                       <input type="email" className="form-control form-control-lg bg-light fs-6" placeholder="Email address" />
      //                   </div>
      //                   <div className="input-group mb-1">
      //                       <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" />
      //                   </div>
      //                   <div className="input-group mb-5 d-flex justify-content-between">
      //                       <div className="form-check">
      //                           <small><a href="#" className="form-check-label text-secondary">Forgot Password?</a></small>
      //                       </div>
      //                       <div className="forgot">
                                
      //                       </div>
      //                   </div>
      //                   <div className="input-group mb-3">
      //                       <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
      //                   </div>
      //                   <div className="row">
      //                       <small>Don't have account? <a href="#" onClick={()=>{setAction("Sign Up")}}>Sign Up</a></small>
      //                   </div>
      //               </div>
      //           </div>
      //       </div>
      //   </div>
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
         <div className="inputs">
            {action==="Login"?<div></div>:
            <div className="input">
                <img src={user_icon}></img>
                <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            }
            <div className="input">
                <img src={email_icon}></img>
                <input type="email" placeholder="Email ID" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <img src={psswd_icon}></img>
                <input type="password" placeholder="Password" onChange={(e)=>setPsswd(e.target.value)}/>
            </div>
         </div>
         {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot password <span>Click Here!</span></div>}
         <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
         </div> 
         {next ===true?<Link
            to={{
                pathname: action === "Login" ? "/" : "/VerifyOTP",
            }}
            ><div className="submitFinal" onClick={action === "Sign Up" ? submits : logins}>submit</div></Link>: 
            <Link to="/Login"><div className="submitFinal" onClick={action === "Sign Up" ? submits : logins}>submit</div></Link>}  
        </div>
    );
}

export default Login;