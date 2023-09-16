import PropTypes from 'prop-types';

const Name = ({status}) => {
    const {title} = status;

    return (
        <>
            <li className="text-course-light text-base font-normal">{title}</li>
        </>
    );
};

Name.propTypes = {
    name: PropTypes.object
}

export default Name;