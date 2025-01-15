
import Lottie from 'lottie-react';
import faqLottie from '../../assets/lottie/faq.json'
import { Fade, Zoom } from 'react-awesome-reveal';
import Heading from '../../components/Heading';
const Faq = () => {
    return (
        <div className="">
            <Heading
                title='You Have Any Question?'
            ></Heading>
            <div className="lg:flex items-center gap-6">
                <div className="lg:w-1/2">
                    <div className='h-full w-full'>
                        <Zoom duration={1000} triggerOnce>
                            <Lottie animationData={faqLottie} loop={true} />
                        </Zoom>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="join join-vertical w-full">
                        <Fade direction='up' duration={2000}>
                            <div className="collapse collapse-plus join-item border-black border-b-[1px] py-3">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl md:text-2xl font-semibold">Why was this website created?</div>
                                <div className="collapse-content text-lg">
                                    <p className="">We typically study in schools, colleges, or universities, and we want the ability to continue our studies, submit assignments, and attend various programs from home.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction='up' duration={2000}>
                            <div className="collapse collapse-plus join-item border-black border-b-[1px] py-3">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl md:text-2xl font-semibold">How does online learning benefit students?</div>
                                <div className="collapse-content text-lg">
                                    <p>Online learning provides students with the opportunity to access courses and materials at their own pace, enabling personalized learning. It also saves time and transportation costs, making education more affordable and efficient.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction='up' duration={2000}>
                            <div className="collapse collapse-plus join-item border-black border-b-[1px] py-3">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl md:text-2xl font-semibold">Why is online education important?</div>
                                <div className="collapse-content text-lg">
                                    <p> Online education allows students to learn from anywhere at any time, offering flexibility and convenience. It eliminates the need for physical presence and makes learning more accessible to people from different locations.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction='up' duration={2000}>
                            <div className="collapse collapse-plus join-item py-3">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl md:text-2xl font-semibold"> What are the main features of online education platforms?</div>
                                <div className="collapse-content text-lg">
                                    <p>Key features of online education platforms include video lectures, interactive assignments, quizzes, discussion forums, and access to study materials. They often support flexible schedules and a variety of courses to meet diverse learning needs.</p>
                                </div>
                            </div>
                        </Fade>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;