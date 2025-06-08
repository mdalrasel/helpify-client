import { FaArrowRight } from "react-icons/fa";
import banner01 from '../../src/assets/banner01.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                className="w-full max-w-7xl mx-auto"
            >

                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                className="w-full mt-5 rounded-2xl min-h-[40vh] bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: `url(${banner01})`,
                }}
            >
                <div className="w-full md:w-1/2 px-6 md:px-16">
                    <h1
                        data-aos="fade-right"
                        className=" text-3xl md:text-5xl font-bold leading-tight"
                    >
                        THE <span className="text-yellow-400">WORLD’S</span> <br />
                        <span className="text-yellow-400">#1 ONLINE</span> <br />
                        EDUCATION
                    </h1>

                    <p
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className=" mt-4"
                    >
                        Search over 200 individual encyclopedias and reference books from the world.
                    </p>

                    <button
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center gap-2"
                    >
                        Explore Courses <FaArrowRight />
                    </button>
                </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                className="w-full mt-5 rounded-2xl min-h-[40vh] bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: `url(${banner01})`,
                }}
            >
                <div className="w-full md:w-1/2 px-6 md:px-16">
                    <h1
                        data-aos="fade-right"
                        className=" text-3xl md:text-5xl font-bold leading-tight"
                    >
                        THE <span className="text-yellow-400">WORLD’S</span> <br />
                        <span className="text-yellow-400">#1 ONLINE</span> <br />
                        EDUCATION
                    </h1>

                    <p
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className=" mt-4"
                    >
                        Search over 200 individual encyclopedias and reference books from the world.
                    </p>

                    <button
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center gap-2"
                    >
                        Explore Courses <FaArrowRight />
                    </button>
                </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                className="w-full mt-5 rounded-2xl min-h-[40vh] bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: `url(${banner01})`,
                }}
            >
                <div className="w-full md:w-1/2 px-6 md:px-16">
                    <h1
                        data-aos="fade-right"
                        className=" text-3xl md:text-5xl font-bold leading-tight"
                    >
                        THE <span className="text-yellow-400">WORLD’S</span> <br />
                        <span className="text-yellow-400">#1 ONLINE</span> <br />
                        EDUCATION
                    </h1>

                    <p
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className=" mt-4"
                    >
                        Search over 200 individual encyclopedias and reference books from the world.
                    </p>

                    <button
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center gap-2"
                    >
                        Explore Courses <FaArrowRight />
                    </button>
                </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                className="w-full mt-5 rounded-2xl min-h-[40vh] bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: `url(${banner01})`,
                }}
            >
                <div className="w-full md:w-1/2 px-6 md:px-16">
                    <h1
                        data-aos="fade-right"
                        className=" text-3xl md:text-5xl font-bold leading-tight"
                    >
                        THE <span className="text-yellow-400">WORLD’S</span> <br />
                        <span className="text-yellow-400">#1 ONLINE</span> <br />
                        EDUCATION
                    </h1>

                    <p
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className=" mt-4"
                    >
                        Search over 200 individual encyclopedias and reference books from the world.
                    </p>

                    <button
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center gap-2"
                    >
                        Explore Courses <FaArrowRight />
                    </button>
                </div>
            </div>
                </SwiperSlide>

            </Swiper>
            
        </div>
    );
};

export default Banner;
