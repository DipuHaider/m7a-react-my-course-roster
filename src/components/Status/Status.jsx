import PropTypes from 'prop-types';
import Name from '../Name/Name';

const Status = ({statuses, creditHourRemaining,  totalHour, totalPrice}) => {
    return (
        <div className="card bg-base-100">
            <div className="card-body text-left p-5">
                <h2 className="text-lg text-course-blue font-bold leading-7">Credit Hour Remaining {creditHourRemaining} hr</h2>
                <hr />
                <h2 className="text-xl text-course-dark font-bold">Course Name</h2>
                <ul>
                    {
                        statuses.map((status, idx) => <Name key={status.id} status={status} counter={idx + 1}></Name>)
                    }
                </ul>
                <hr />
                <h3 className="text-status-light font-medium text-base">Total Credit Hour : {totalHour}</h3>
                <hr />
                <h3 className="text-status-light font-semibold text-base">Total Price : {totalPrice} USD</h3>
                
            </div>
        </div>
    );
};

Status.propTypes = {
    statuses: PropTypes.array
}

export default Status;