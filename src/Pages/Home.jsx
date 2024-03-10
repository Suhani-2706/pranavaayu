import React from "react";
import Heading from "../components/landing/Heading/heading";
import Hero from "../components/landing/Hero/hero";
import Footer from "../components/landing/Footer/Footer";
const Home=()=>{
    return(
        <div className="App">
            <div>
                <Heading />
                <Hero />
            </div>
            <div>
            <Footer />
            </div>
            
        </div>
    )
};
export default Home;