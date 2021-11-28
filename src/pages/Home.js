import React from 'react'
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/reefBackground.jpg";
import '../styles/Home.css'

function Home() {
    return (
        <div className="home"
        style={{ backgroundImage: `url(${backgroundImage})`}}
        >
            <div 
            className="headerContainer" 
            >
                <h1>TMK Scuba</h1>
                <p>Diving at any level, for any level</p>
                <Link to="/courses">
                    <button> BOOK NOW </button>
                </Link>    
            </div>
        </div>
    )
}

export default Home
