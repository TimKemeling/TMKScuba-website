import React from 'react'
import "../styles/About.css"
import maltaRock from "../assets/MaltaRock.png"

function About() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${maltaRock})`}} className="about"></div>
            <div className="aboutContainer">
                <h1>About Me</h1> 
                <p>
                    I'm Tim Kemeling. A diving instructor originally from The Netherlands. <br/>
                    I'm currently living on a small island in the gulf of Thailand called Koh Tao. <br/>
                    I have 5 years of experience in the diving industry, and I've worked in a number of different locations.<br/>
               
                </p>
            </div>
        </div>
    )
}

export default About
