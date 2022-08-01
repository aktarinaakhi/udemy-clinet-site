import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    EffectCoverflow, Pagination,
} from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export default function Excel() {

    const [courses, setCourses] = useState([]);
    SwiperCore.use([EffectCoverflow, Pagination]);



    useEffect(() => {
        fetch('./python.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [courses])
    return (
        <div className='footer-logo'>
            <h1 className='text-2xl font-semibold'>Expand your career opportunities with Python</h1>

            <p className='my-3'>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
            <button className='border border-black py-2 px-3 font-semibold'>Explore Python</button>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    loopFillGroupWithBlank={true}
                    pagination={{

                        "clickable": true
                    }}
                    navigation={true}
                    className="mySwiper"
                >

                    {courses?.map(product => <SwiperSlide
                        key={product._id}
                        className='hover:shadow-lg my-4 w-96'
                    >


                        <div>
                            <img src={product.img} alt="" className='mb-3 h-64' />
                            <div className='px-3'>
                                <p>{product.name.slice(0, 30)}</p>
                                <p>{product.descriptoin}</p>
                                <p>{product.price}</p>
                            </div>
                        </div>



                    </SwiperSlide>)}
                </Swiper>
            </div>


        </div>
    )
}
