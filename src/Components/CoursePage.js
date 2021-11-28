import React from 'react';
// import OWD from "../assets/OWD.jpg";


function CoursePage({image, name, description, price, id}) {
    return (
        <div className="course">
            <h2>{name}</h2>
            <div className="courseImage" style={{ backgroundImage: `url(${image})`}}></div>
            <p>{description}</p>
            <p>$ {price}</p>  
            <button >Book Now!</button>    
            {/* <h2>open water</h2>
            <div className="courseImage" style={{ backgroundImage: `url(${OWD})`}}></div>
            <p>blablabla open water course. </p>
            <p>$ 500</p>  
            <button>Book Now!</button>        */}
        </div>
    )
}

export default CoursePage
