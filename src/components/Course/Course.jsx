import PropTypes from 'prop-types';

const Course = ({course}) => {
    const{title, img, details, price, credit} = course;

    return (
        <div className="course">
            
            {/* <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button> */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div>
                        <h3>Price: {price}</h3>
                        <h3>Credit hours: {credit}</h3>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
}

export default Course;