import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const BecomeInstructorSection = () => {

    return (
        <div className="flex flex-col md:flex-row gap-6 mb-20 mx-8 lg:mx-0">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 lg:w-1/2 mb-8">
                <img
                    src="https://www.a2nacademy.com/a2n_assets/img/become-instructor/become-a-instructor.png"
                    alt="Become an Instructor"
                    className="w-full h-auto lg:h-[400px] object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Right side - Text */}
            <div className="w-full md:w-1/2 lg:w-1/2 mb-8 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                    Become an Instructor
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    As a teacher, you have the power to shape the future by sharing your knowledge and expertise. Whether you are an experienced educator or an industry expert, our platform offers you the opportunity to reach eager students who are ready to learn.
                </p>
                <Link to='/teachOnCoursePlus'>
                    <Fade direction='up' duration={2000}>
                        <button className="uppercase bg-cyan-700 py-2 px-12  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-cyan-700 hover:bg-transparent transition-all rounded-full hover:text-cyan-700">
                            Start Teaching
                        </button>
                    </Fade>
                </Link>
            </div>
        </div>
    );
};

export default BecomeInstructorSection;
