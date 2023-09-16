import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import './Courses.css';

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
                    <div className="card bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;