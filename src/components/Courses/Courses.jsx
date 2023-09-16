import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json').then(res => res.json()).then(data => setCourses(data));
    }, []); 

    return (
        <div>
            <h2>Courses Available: {courses.length}</h2>
            
            <div className="course-container">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;