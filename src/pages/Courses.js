import React from 'react';
import { CourseList } from '../helpers/CourseList';
import CourseCard from '../Components/courseCard';
import "../styles/Courses.css";

function courses() {
    return (
        <div className="courses">
            <h1 className="coursesTitle">Courses</h1>
            <div className="CoursesList">
                {CourseList.map((course, key) => {
                    return <CourseCard
                                key={key}
                                image={course.Image} 
                                name={course.Name} 
                                price={course.price} 
                                tagline={course.tagline}
                                id={course.id}/>
                    }
                )}
            </div>
        </div>
    )
}

export default courses
