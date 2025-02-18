import { Link } from "react-router-dom";
import { FaUsers, FaDollarSign } from "react-icons/fa";

const CourseCard = ({ course }) => {
    const { _id, title, name, image, price, description, totalEnrollment } = course;

    return (
        <div className="border rounded-lg overflow-hidden shadow-md bg-white transition hover:shadow-lg">
            {/* Image Section */}
            <figure className="relative h-40">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-1 rounded">
                    ⭐ Bestseller
                </span>
            </figure>

            {/* Content Section */}
            <div className="p-3">
                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 truncate">{title}</h2>

                {/* Creator Name */}
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    ✍ <span className="font-medium">{name}</span>
                </p>

                {/* Description (Shortened) */}
                <p className="text-xs text-gray-700 mt-1 line-clamp-2">{description}</p>

                {/* Price & Enrolled Students */}
                <div className="mt-2 flex justify-between items-center text-xs text-gray-600">
                    <span className="flex items-center gap-1 text-base font-semibold text-green-600">
                        <FaDollarSign className="text-sm" /> {price}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaUsers className="text-sm" /> {totalEnrollment} Students
                    </span>
                </div>

                {/* Enroll Button */}
                <Link to={`/courseDetails/${_id}`} className="block mt-3">
                    <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-1.5 rounded text-sm transition">
                        🔥 Enroll Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
