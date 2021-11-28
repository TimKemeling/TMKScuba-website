import React, {useState} from 'react';
import fishLogo from '../assets/fishLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)
    
    const toggleNavBar = () => {
        setOpenLinks(!openLinks)
    }
    
    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? 'open' : 'closed'}>
                <img src={fishLogo} alt="Company Logo"/> 
                <p className="companyName">TMK Scuba</p>
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>          
                    <Link to="/courses">Courses</Link>          
                    <Link to="/about">About</Link>          
                    <Link to="/contact">Contact</Link> 
                </div>  
            </div>            
            <div className='rightSide'> 
                <Link to="/">Home</Link>          
                <Link to="/courses">Courses</Link>          
                <Link to="/about">About</Link>          
                <Link to="/contact">Contact</Link> 
                <button onClick={toggleNavBar}>
                    <ReorderIcon />       
                </button>  
                </div> 
        </div>
    )
}

export default Navbar
