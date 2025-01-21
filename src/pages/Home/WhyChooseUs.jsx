import { Fade } from "react-awesome-reveal";
import Heading from "../../components/Heading";

const WhyChooseUs = () => {
    return (
        <section className="pb-10 mx-8 lg:mx-0">
            <div >
                <Heading title='Why Choose Us?'></Heading>
                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-8">
                        {/* Expert Assignment Help */}
                        <Fade direction="up" duration={2000}>
                            <div className="flex items-start gap-4">
                                <div className="bg-white text-blue-600 p-3 rounded-full shadow-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8"
                                    >
                                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-11h2v6h-2zm0 8h2v2h-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium dark:text-white">Expert Assignment Help</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Our team consists of experienced developers who specialize in
                                        creating tailored web components and features for academic
                                        assignments.
                                    </p>
                                </div>
                            </div>
                        </Fade>

                        {/* Quality Output */}
                        <Fade direction="up" duration={2000}>
                            <div className="flex items-start gap-4">
                                <div className="bg-white text-green-600 p-3 rounded-full shadow-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8"
                                    >
                                        <path d="M12 0C5.383 0 0 5.383 0 12c0 6.617 5.383 12 12 12 6.617 0 12-5.383 12-12C24 5.383 18.617 0 12 0zm-2 17.414l-5-5 1.414-1.414L10 14.586l7.586-7.586L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium dark:text-white">Detailed Code</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        We ensure clean, optimized, and well-commented code to make
                                        your assignment stand out and help you understand every
                                        component.
                                    </p>
                                </div>
                            </div>
                        </Fade>

                        {/* On-Time Delivery */}
                        <Fade direction="up" duration={2000}>
                            <div className="flex items-start gap-4">
                                <div className="bg-white text-pink-500 p-3 rounded-full shadow-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8"
                                    >
                                        <path d="M12 0C5.383 0 0 5.383 0 12c0 6.617 5.383 12 12 12 6.617 0 12-5.383 12-12C24 5.383 18.617 0 12 0zm6 12l-8 8-2-2 6-6-6-6 2-2 8 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium dark:text-white">Timely Submissions</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Deadlines are important! We guarantee the timely delivery of
                                        your assignment components, ensuring no last-minute stress.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Why Choose Us"
                            className="rounded-lg shadow-lg transform lg:h-[400px] h-auto object-cover transition-transform duration-500 w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;