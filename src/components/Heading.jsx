import { Fade } from "react-awesome-reveal";

const Heading = ({ title }) => {
    return (
        <Fade direction="up" duration={1000}>
            <h2 className="text-3xl font-bold text-center pb-8
        ">{title}</h2>
        </Fade>
    );
};

export default Heading;