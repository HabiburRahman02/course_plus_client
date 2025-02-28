import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../../components/Heading';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Feedback = () => {
    const [feedback, setFeedback] = useState([]);
    const axiosPublic = useAxiosPublic();
    console.log(feedback);
    useEffect(() => {
        axiosPublic.get('feedbacks')
            .then(data => setFeedback(data.data))
    }, [axiosPublic])

    return (
        <div className='pb-20 px-6 md:px-0'>
            <Heading
                title="Teaching Evaluation Report"
            ></Heading>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper h-full"
                breakpoints={{
                    640: {
                        slidesPerView: 1, // Show 1 slide on small screens
                    },
                    768: {
                        slidesPerView: 2, // Show 2 slides on medium screens
                    },
                    1024: {
                        slidesPerView: 3, // Show 3 slides on larger screens
                    },
                }}
            >
                <div >

                    {
                        feedback.map(feed =>
                            <SwiperSlide key={feed._id}>
                                <div className="card dark:bg-gray-800 dark:text-white bg-white hover:scale-105 duration-500 h-full rounded-none shadow-lg border">
                                    <figure>
                                        <img
                                            src={feed.image}
                                            className='h-32 w-32 mt-8 object-cover rounded-full'
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {feed.name}
                                            <div className="badge badge-secondary">{feed.rating}</div>
                                        </h2>
                                        <p>{feed.description}...</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </div>
            </Swiper>
        </div>
    );
};

export default Feedback;