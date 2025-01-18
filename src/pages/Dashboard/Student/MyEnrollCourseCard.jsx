
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default MyEnrollCourseCard;
