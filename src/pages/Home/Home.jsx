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
            <div className="max-w-[1300px] mx-auto">
                <Partners />
                <PopularCourses />
                <Feedback />
                <StatsSection />
                <BecomeInstructorSection />
                <Faq />
                <WhyChooseUs />
            </div>

        </div>
    );
};

export default Home;