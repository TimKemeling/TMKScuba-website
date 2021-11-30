import React from 'react';
import CoursePage from '../Components/CoursePage';
import { CourseList } from '../helpers/CourseList';
import { useParams } from "react-router-dom";

function Course() {
    const { courseId } = useParams();
    const CourseObject = CourseList.find(course => course.id === { courseId } )

    return (
        <div>
            <CoursePage 
                key={key}
                image={CourseObject.Image} 
                name={CourseObject.Name} 
                price={CourseObject.price} 
                description={CourseObject.description}/>
        </div>
    )
}
export default Course
