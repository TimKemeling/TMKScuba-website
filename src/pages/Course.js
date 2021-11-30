import React from 'react';
import CoursePage from '../Components/CoursePage';
import CourseList from '../helpers/CourseList';
import { useParams } from "react-router-dom";

function Course() {

    const params = useParams();
    const CourseObject = CourseList[params.id];

    return (
        <div>
            <CoursePage 
                image={CourseObject.Image} 
                name={CourseObject.Name} 
                price={CourseObject.price} 
                description={CourseObject.description}
                />
        </div>
    )
}
export default Course
