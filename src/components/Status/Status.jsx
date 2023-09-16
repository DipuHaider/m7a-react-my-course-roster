import PropTypes from 'prop-types';
import Name from '../Name/Name';


const Status = ({statuses}) => {
    return (
        <div className="card bg-base-100">
            <h2>{statuses.length}</h2>
            <div className="card-body text-left p-5">
                <h2 className="text-lg text-course-blue font-bold leading-7">Credit Hour Remaining 20 hr</h2>
                <hr />
                <h2 className="text-xl text-course-dark font-bold">Course Name</h2>
                <ul>
                    {
                        statuses.map(status => <Name key={status.id} status={status}></Name>)
                    }
                    {/* <li className="text-course-light text-base font-normal">1 Introduction to c programming</li>
                    <li className="text-course-light text-base font-normal">2 Introduction to C++ for DSA</li>
                    <li className="text-course-light text-base font-normal">3 Software Engineering</li> */}
                </ul>
                <hr />
                <h3 className="text-status-light font-medium text-base">Total Credit Hour : 0</h3>
                <hr />
                <h3 className="text-status-light font-semibold text-base">Total Price : 48000 USD</h3>
                
            </div>
        </div>
    );
};

Status.propTypes = {
    statuses: PropTypes.array
}

export default Status;