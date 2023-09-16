import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Status from "../Status/Status";

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json').then(res => res.json()).then(data => setCourses(data));
    }, []); 

    return (
        <div className="container mx-auto ">
            <div className="flex space-x-7">
                <div className="flex flex-col w-3/4">
                    <div className="grid gap-6 grid-cols-3">
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}
                                ></Course>)
                        }
                    </div>
                </div>
                <div className="flex flex-col w-1/4">
                    <Status></Status>
                </div>
            </div>
        </div>
    );
};

export default Courses;