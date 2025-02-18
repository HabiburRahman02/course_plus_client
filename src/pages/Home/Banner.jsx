import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import banner1 from '../../assets/banner/banner1.jpg'
import banner2 from '../../assets/banner/banner2.jpg'
import banner3 from '../../assets/banner/banner3.jpg'
import { Link } from 'react-router-dom';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'
import { Fade } from 'react-awesome-reveal';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div className=''>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={2000}
                className='w-full md:h-[550px] bg-fixed h-[520px]' >
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-neutral-content">
                        <div className='flex justify-start items-center'>
                            <div className="md:w-2/3">
                                <Fade direction='down' duration={2000}>
                                    <p className="mb-5 md:text-xl text-lg font-bold uppercase">
                                        Build Your Own Interactive Learning Platform
                                    </p>
                                </Fade>
                                <Fade direction='up' duration={2000}>
                                    <h1 className="mb-12 text-4xl md:text-5xl font-bold uppercase">
                                        Transform Learning with <span className='text-[#1ba590]'>Course Plus</span>.
                                    </h1>
                                </Fade>
                                <Link to='/allCourses'>
                                    <Fade direction='up' duration={2000}>
                                        <button className="uppercase bg-cyan-700 py-2 px-12 text-white font-bold 
                        border-[2px] border-transparent hover:border-[2px] hover:border-white hover:bg-transparent 
                        transition-all rounded-full">
                                            Explore Now
                                        </button>
                                    </Fade>
                                </Link>
                            </div>
                            <div className='md:w-1/3'>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner2})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-neutral-content">
                        <div className='flex justify-start items-center'>
                            <div className="md:w-2/3">
                                <Fade direction='down' duration={2000}>
                                    <p className="mb-5 md:text-xl text-lg font-bold uppercase">
                                        Empower Your Learning with Advanced Resources
                                    </p>
                                </Fade>
                                <Fade direction='up' duration={2000}>
                                    <h1 className="mb-12 text-4xl md:text-5xl font-bold uppercase">
                                        Elevate Your Skills with <span className='text-[#1ba590]'>Course Master</span>.
                                    </h1>
                                </Fade>
                                <Link to='/exploreCourses'>
                                    <Fade direction='up' duration={2000}>
                                        <button className="uppercase bg-cyan-700 py-2 px-12 text-white font-bold 
                        border-[2px] border-transparent hover:border-[2px] hover:border-white hover:bg-transparent 
                        transition-all rounded-full">
                                            Explore Now
                                        </button>
                                    </Fade>
                                </Link>
                            </div>
                            <div className='md:w-1/3'>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner3})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-neutral-content">
                        <div className='flex justify-start items-center'>
                            <div className="md:w-2/3">
                                <Fade direction='down' duration={2000}>
                                    <p className="mb-5 md:text-xl text-lg font-bold uppercase">
                                        Empower Your Learning with Advanced Resources
                                    </p>
                                </Fade>
                                <Fade direction='up' duration={2000}>
                                    <h1 className="mb-12 text-4xl md:text-5xl font-bold uppercase">
                                        Elevate Your Skills with <span className='text-[#1ba590]'>Course Master</span>.
                                    </h1>
                                </Fade>
                                <Link to='/allCourses'>
                                    <Fade direction='up' duration={2000}>
                                        <button className="uppercase bg-cyan-700 py-2 px-12 text-white font-bold 
                        border-[2px] border-transparent hover:border-[2px] hover:border-white hover:bg-transparent 
                        transition-all rounded-full">
                                            Explore Now
                                        </button>
                                    </Fade>
                                </Link>
                            </div>
                            <div className='md:w-1/3'>
                            </div>
                        </div>
                    </div>
                </div>



            </AutoplaySlider>

        </div>
    );
};

export default Banner;