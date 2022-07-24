import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, {
//     EffectCoverflow, Pagination,
// } from 'swiper';
// import { Carousel } from '@trendyol-js/react-carousel';
import InfiniteCarousel from 'react-leaf-carousel';
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function Python() {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('./python.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [courses])

    console.log(courses);
    return (
        <div className='footer-logo'>
            <h1 className='text-2xl font-semibold'>Expand your career opportunities with Python</h1>

            <p className='my-3'>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
            <button className='border border-black py-2 px-3 font-semibold'>Explore Python</button>
            <div>


                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        769: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                    }}
                    scrollbar={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
                    </SwiperSlide>
                </Swiper>


                {courses?.map(course => <div
                    key={course.id}
                    className='my-4 w-96'
                >
                    <div className='my-4 w-96 mx-5'>
                        <img
                            alt=''
                            src={course.img}
                            className="w-full"
                        />
                        <p>Python</p>
                    </div>

                    <p>abdjfg</p>

                </div>
                )}



            </div>
        </div>
    )
}
