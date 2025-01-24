import { ThreeCircles } from "react-loader-spinner";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center pt-32">
            <div className="w-20">
                <ThreeCircles
                    visible={true}
                    height="70"
                    width="70"
                    color="#0E7490"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    );
};

export default LoadingSpinner;