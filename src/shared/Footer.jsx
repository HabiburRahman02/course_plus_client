import { Fade } from "react-awesome-reveal";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from '../assets/logo/logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Fade>
            <div className="bg-cyan-950 text-white mt-10 py-5">
                <footer className="py-16 max-w-[1400px] mx-auto px-6 md:px-0">
                    <div className="sm:flex sm:justify-between space-y-12 sm:space-y-0">
                        {/* Services Section */}
                        <div>
                            <h6 className="text-xl font-bold mb-4">Services</h6>
                            <ul className="space-y-3">
                                <li><Link to='/' className="hover:text-green-500 transition-colors">Home</Link></li>
                                <li><Link to='allCourses' className="hover:text-green-500 transition-colors">Courses</Link></li>
                            </ul>
                        </div>

                        {/* Features Section */}
                        <div>
                            <h6 className="text-xl font-bold mb-4">Features</h6>
                            <ul className="space-y-3">
                                <li><Link to='/teachOnCoursePlus' className="hover:text-green-500 transition-colors">Teach On?</Link></li>
                                <li><Link to='/contact' className="hover:text-green-500 transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h6 className="text-xl font-bold mb-4">Contact Info</h6>
                            <ul className="space-y-3">
                                <li><span>Email:</span> <a href="mailto:info@crowcube.com" className="hover:text-green-500 transition-colors">habibur88454@gmail.com</a></li>
                                <li><span>Address:</span> Dhaka, Bangladesh</li>
                            </ul>
                        </div>

                        {/* Social Section */}
                        <div className="flex flex-col items-center sm:items-start">
                            <h6 className="text-xl font-bold mb-4">Follow Us</h6>
                            <div className="flex gap-4 mb-4">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-2xl hover:text-[#1DA1F2] transition-colors" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-2xl hover:text-[#0077B5] transition-colors" />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-2xl hover:text-[#1877F2] transition-colors" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-2xl hover:text-[#E4405F] transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                        <div className="flex items-center space-x-4">
                            <img src={logo} alt="Logo" className="h-8" />
                            <p>&copy; {new Date().getFullYear()} All Rights Reserved By CoursePlus</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <a href="#privacy" className="hover:text-green-500 transition-colors">Privacy Policy</a> |
                            <a href="#terms" className="hover:text-green-500 transition-colors"> Terms of Service</a>
                        </div>
                    </div>
                </footer>
            </div>

        </Fade>
    );
};

export default Footer;