import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'; 
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return ( 
        <div className="hero-container">
            <h1>WRITE YOUR VIEWS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
            <Link to='/read'>
                <button className='new-button'>
                    READ THE REVIEWS
                </button></Link>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    WRITE A REVIEW
                </Button>
                
            </div>
        </div>
     );
}
 
export default HeroSection;