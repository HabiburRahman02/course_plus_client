import { Link } from "react-router-dom";

const MyEnrollCourseCard = ({ course }) => {

    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-white">
            {/* Image */}
            <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />

            <div className="px-4 py-2">
                {/* Title */}
                <div className="font-semibold text-xl mb-2">{course.title}</div>

                {/* Name of the poster */}
                <p className="text-gray-700 text-base mb-2">Posted by: {course.name}</p>

                {/* Continue button */}
                <Link to={`/dashboard/myEnrollCourseDetails/${course._id}`}>
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
                        Continue
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MyEnrollCourseCard;
