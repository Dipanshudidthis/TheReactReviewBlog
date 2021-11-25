import HeroSection from "../HeroSection";
import '../../App.css';
import React from 'react';
import Writing from "./Writingpage";
import About from "./About";
import Navbar from "../Navbar";


const Home = () => {
    return ( 
        <>
        <div id="home">
        <Navbar />
            <HeroSection />
            <Writing />
            <About />
            </div>
        </>
     );
}
 
export default Home;