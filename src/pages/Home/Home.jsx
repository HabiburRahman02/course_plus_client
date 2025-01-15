import Banner from "./Banner";
import BecomeInstructorSection from "./BecomeInstructorSection";
import Faq from "./Faq";
import Feedback from "./Feedback";
import Partners from "./Partners";
import PopularCourses from "./PopularCourses";
import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <PopularCourses></PopularCourses>
            <Feedback></Feedback>
            <StatsSection></StatsSection>
            <BecomeInstructorSection></BecomeInstructorSection>
            <Faq></Faq>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;