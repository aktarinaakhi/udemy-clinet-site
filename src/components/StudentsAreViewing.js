import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    EffectCoverflow, Pagination,
} from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export default function StudentsAreViewing() {

    const [courses, setCourses] = useState([]);
    SwiperCore.use([EffectCoverflow, Pagination]);



    useEffect(() => {
        fetch('./python.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [courses])
    return (
        <div className='container mx-auto'>
            <div className='mx-32'>
                <h1 className='text-3xl font-bold mt-11'>Students are viewing</h1>
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
                                    <p>{product.name}</p>
                                    <p className='text-sm text-gray-500'>{product.teacher}</p>
                                    <p>$ {product.price}</p>
                                </div>
                            </div>

                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
