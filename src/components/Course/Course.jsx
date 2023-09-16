const Course = ({course}) => {
    const{title, img} = course;

    return (
        <div className="course">
            <h3>Course: {title}</h3>
            <img src={img} alt="" />
            {/* <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button> */}
        </div>
    );
};

export default Course;