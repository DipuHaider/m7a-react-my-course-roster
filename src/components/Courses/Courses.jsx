import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Status from "../Status/Status";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [creditHourRemaining, setCreditHourRemaining] = useState(20);
    const [totalHour, setTotalHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(48000);

    const handleAddToStatus =  course => {
        const isExist = statuses.find((item) => item.id == course.id );

        let count = course.credit;
        let countPrice = course.price;

        if (isExist) {
            return toast("Course Name Already Exist!!");
        } else {
            statuses.forEach((item) => {
                count = count + item.credit;
                countPrice = countPrice + item.price;
            });

            const totalRemaining = 20 - count;
            const totalRemainingPrice= 48000 - countPrice;

            if (count > 20){
                return toast("Course credit hour is over 20hrs.!!");
            } else if(countPrice > 48000) {
                return toast("Course Price is over $48000 !!"); 
            } else {
                setTotalHour(count);
                setCreditHourRemaining(totalRemaining);
                setTotalPrice(totalRemainingPrice);
                setStatuses([...statuses, course]);
            }
        }
    }

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
                    <Status statuses={statuses} creditHourRemaining={creditHourRemaining} totalHour={totalHour} totalPrice={totalPrice}></Status>
                    <ToastContainer />
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