import PropTypes from 'prop-types';
import { FiDollarSign, FiBookOpen } from "react-icons/fi";
import {IconContext} from "react-icons";

const Course = ({course, handleAddToStatus}) => {
    const{title, img, details, price, credit} = course;

    return (
        <div className="course">
            
            {/* <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button> */}
            <div className="card bg-base-100 shadow-xl rounded-lg h-full">
                <figure><img className="p-3 rounded-lg" src={img} alt={title} /></figure>
                <div className="card-body p-3 text-left space-y-4">
                    <h2 className=" text-course-dark font-semibold text-base">{title}</h2>
                    <p className='text-sm font-normal text-course-light leading-6'>{details}</p>
                    <div className='flex justify-between items-center'>
                        <IconContext.Provider
                            value={{ color: '#1B1B1B99' }}
                        >
                        <FiDollarSign />
                        <h3 className='text-course-light text-base font-medium'>Price: {price}</h3>
                        <FiBookOpen />
                        <h3 className='text-course-light text-base font-medium'>Credit: {credit}hr</h3>
                        </IconContext.Provider>
                    </div>
                    <div className="card-actions w-full">
                        <button onClick={() => handleAddToStatus(course)} className="btn btn-wide text-white text-lg font-semibold bg-course-blue hover:bg-white hover:text-course-blue">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToStatus: PropTypes.func.isRequired,
}

export default Course;