import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css";
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Link to="https://www.facebook.com/TMKScuba"><FacebookIcon /></Link>
                <Link to="https://www.facebook.com/TMKScuba"><InstagramIcon /></Link>
                
            </div>
            <p>&copy; 2021 TMKScuba.com</p>

        </div>
    )
}

export default Footer

