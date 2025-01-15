import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const { _id, title, teacherName, image, price, description, totalEnrollment } = course;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            </figure>
            <div className="p-5">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <p className="text-sm text-gray-500">By: {teacherName}</p>
                <p className="text-gray-700 mt-2">{description}</p>
                <div className="mt-2 flex justify-between items-center">
                    <span className="text-lg font-semibold text-green-600">${price}</span>
                    <span className="text-sm text-gray-500">
                        Enrolled: {totalEnrollment} students
                    </span>
                </div>
                <div className="card-actions mt-2">
                    <Link to={`/courseDetails/${_id}`} className="w-full">
                        <button className="btn btn-primary w-full">Enroll</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
