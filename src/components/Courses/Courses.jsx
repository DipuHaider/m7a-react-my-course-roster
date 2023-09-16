import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Status from "../Status/Status";
import PropTypes from 'prop-types';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [creditHourRemaining, setCreditHourRemaining] = useState(0);

    const handleAddToStatus =  course => {
        // console.log(course)
        const isExist = statuses.find((item) => item.id == course.id );
        if (isExist) {
            alert("already exist");
        } else {
            setStatuses([...statuses, course]);
        }

        // const newStatuses= [...statuses, course];
        // setStatuses(newStatuses);
    }

    // const handleCreditHourRemaining = timeRemaining => {
    //     console.log(timeRemaining)
    // };

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
                                handleAddToStatus={handleAddToStatus}
                                ></Course>)
                        }
                    </div>
                </div>
                <div className="flex flex-col w-1/4">
                    <Status statuses={statuses} ></Status>
                </div>
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleAddToStatus: PropTypes.func,
    handleCreditHourRemaining: PropTypes.func
}

export default Courses;