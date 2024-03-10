import React, { useState } from "react";
import pic from "./img.png"
import "./hero.css";

function Hero() {

  return (
      <div class="hero">
        <div class="join">
            <div class="text">
                <h1 style={{color:"blue",fontSize:"50px"}}>Lets</h1>
                <h1 style={{color:"blue",fontSize:"50px"}}>Breathe</h1>
                <h1 style={{fontSize:"50px"}}>Healthy!</h1>
                <h2 style={{color:"grey", size:"12px"}}>introducing GardenAir! Rejuvinate</h2>
                <img src="https://i0.wp.com/pranavaayu.com/wp-content/uploads/2021/09/cropped-Pranavayu-05.png?resize=512%2C512&ssl=1" alt="Logo" />
            </div>
            <div className="image">
                <img src={pic} alt="Logo" />
            </div>
        </div>
        <div className="photo">
            <img style={{ width:"100%"}}src="https://i0.wp.com/pranavaayu.com/wp-content/uploads/2022/08/pranavaayu.jpg?w=800&ssl=1" />
            <img className="rotate" style={{height:"500px", width:"500px"}} src="https://i0.wp.com/pranavaayu.com/wp-content/uploads/2022/08/Pran-01.png?resize=1536%2C1536&ssl=1" />
        </div>
      </div>
  );
}

export default Hero;
