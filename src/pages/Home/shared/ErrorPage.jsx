import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">
            <Link to='/'>
                <div className="text-center pt-10">
                    <button className="uppercase bg-cyan-700 hover:bg-cyan-800 py-3 px-8  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px]  transition-all">
                        Back Home
                    </button>
                </div>
            </Link>
            <img className='md:w-1/2 w-full mx-auto mt-10' src="https://i0.wp.com/www.silocreativo.com/en/wp-content/uploads/2017/11/diseno-web-404-CSS.gif?resize=600%2C323&quality=100&strip=all&ssl=1" alt="" />

        </div>
    );
};

export default ErrorPage;