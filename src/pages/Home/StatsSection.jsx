import Heading from "../../components/Heading";

const StatsSection = () => {
    // Sample data, replace with dynamic data from  backend
    const totalUsers = 1200;
    const totalClasses = 45;
    const totalEnrollments = 5000;

    return (
        <div>
            <Heading title='Our CoursePlus Stats'></Heading>
            <div className="flex flex-col md:flex-row justify-between items-center gap-20 p-8 md:p-0">
                {/* Left side - Stats */}
                <div className="w-full md:w-1/2 lg:w-1/2 mb-8 text-center">
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Total Users</h2>
                        <p className="text-2xl font-bold">{totalUsers}</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg mt-6">
                        <h2 className="text-xl font-semibold mb-2">Total Classes</h2>
                        <p className="text-2xl font-bold">{totalClasses}</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg mt-6">
                        <h2 className="text-xl font-semibold mb-2">Total Student Enrollments</h2>
                        <p className="text-2xl font-bold">{totalEnrollments}</p>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="w-full md:w-1/2 lg:w-1/2 mb-8">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnBx4VBO2U3ENHuWjK5oVkvspLpu3uHyFCA&s"
                        alt="Website Image"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
