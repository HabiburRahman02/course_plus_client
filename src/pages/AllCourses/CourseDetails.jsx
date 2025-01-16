import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);

    return (
        <div className="mx-3 md:mx-0 py-12">
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md dark:text-black">
                <img className="h-64 w-full object-cover rounded-lg mb-4" src={course.image} alt="" />
                <h1 className="text-2xl font-bold mb-4 text-center">course Details</h1>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Title: {course.title}</h2>
                    <p className="text-gray-600">Description: {course.description}</p>
                </div>

                <div className="mb-4">
                    <p><strong>Created By:</strong> {course.name}</p>
                    <p><strong>Email:</strong> {course.email}</p>
                    <p><strong> Total Enrolled:</strong> {course.totalEnrollment}</p>
                    <p><strong>Price:</strong> ${course.price}</p>
                </div>

                <Link to={`/payment/${course._id}`}>
                    <button className="font-semibold bg-cyan-700 hover:bg-[#03816e] text-white px-8 py-2 rounded-full">Pay and enroll</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetails;