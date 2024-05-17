import SectionTitle from "../../components/Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {


    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])

    return (
        <div>
            <SectionTitle heading={'Check it out'} subHeading={'FROM OUR MENU'}></SectionTitle>
            <div>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}

                        >
                            <div className="flex flex-col items-center justify-center p-4 space-y-6">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-5xl" />
                                <div className="text-center px-32 space-y-6">
                                    <p>{review.details}</p>
                                    <h1 className="text-2xl text-yellow-700 font-semibold">{review.name}</h1>
                                </div>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;