import Banner from "./Banner";
import Feedback from "./Feedback";
import Partners from "./Partners";
import PopularCourses from "./PopularCourses";
import StatsSection from "./StatsSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <PopularCourses></PopularCourses>
            <Feedback></Feedback>
            <StatsSection></StatsSection>
        </div>
    );
};

export default Home;