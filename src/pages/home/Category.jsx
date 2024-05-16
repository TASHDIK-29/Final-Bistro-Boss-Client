import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/Shared/SectionTitle';



const Category = () => {
    return (
        <section>
            <SectionTitle heading={"From 11 AM to 10 PM"} subHeading={"Order Online"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h1 className='uppercase text-3xl text-center -mt-20 text-white'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h1 className='uppercase text-3xl text-center -mt-16 text-white'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h1 className='uppercase text-3xl text-center -mt-16 text-white'>Soup</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h1 className='uppercase text-3xl text-center -mt-16 text-white'>Cake</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h1 className='uppercase text-3xl text-center -mt-16 text-white'>Salad</h1>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;