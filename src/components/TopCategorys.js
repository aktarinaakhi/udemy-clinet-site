import React from 'react'
import design from '../asstes/design.jpg'
import business from '../asstes/business.jpg'
import development from '../asstes/development.jpg'
import itAndSoftware from '../asstes/it-and-software.jpg'
import marketing from '../asstes/marketing.jpg'
import photography from '../asstes/photography.jpg'
import personalDevelopment from '../asstes/personal-development.jpg'
import music from '../asstes/lohp-category-music-v2.jpg'


export default function TopCategorys() {
    return (
        <div className='container mx-auto'>
            <h1 className='xl:ml-32 text-2xl font-bold'>Top categories</h1>
            <div className="max-w-2xl mx-auto lg:max-w-7xl">
                <div className="my-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    <div className="w-full rounded-md lg:h-full">
                        <img
                            src={design}
                            alt=""
                            className="w-full h-full object-center object-fill lg:w-full lg:h-full hover:scale-105 ease-in duration-100"
                        />
                        <p className='font-semibold mb-10 '>Design</p>
                    </div>

                    <div className="w-full rounded-md lg:h-full">
                        <img
                            src={development}
                            alt=""
                            className="w-full h-full object-center object-fill lg:w-full lg:h-full hover:scale-105 ease-in duration-100"
                        />
                        <p className='font-semibold mb-10'>Development</p>

                    </div>
                    <div className="w-full rounded-md lg:h-full">
                        <img
                            src={marketing}
                            alt=""
                            className="w-full h-full object-center object-fill lg:w-full lg:h-full hover:scale-105 ease-in duration-100"
                        />
                        <p className='font-semibold mb-10'>Marketing</p>

                    </div>
                    <div className="w-full rounded-md lg:h-full">
                        <img
                            src={itAndSoftware}
                            alt=""
                            className="w-full h-full object-center object-fill lg:w-full lg:h-full hover:scale-105 ease-in duration-100"
                        />
                        <p className='font-semibold mb-10'>It and Software</p>

                    </div>
                    <div className="w-full rounded-md lg:h-full">
                        <img
                            src={personalDevelopment}
                            alt=""
                            className="w-full h-full object-center object-fill lg:w-full lg:h-full hover:scale-105 ease-in duration-100"
                        />
                        <p className='font-semibold mb-10'>personal Development</p>

                    </div>
                    <div className="w-full rounded-md lg:h-full">
                        <img
                            src={business}
                            alt=""
                            className="w-full h-full object-center object-fill lg:w-full lg:h-full hover:scale-105 ease-in duration-100"
                        />
                        <p className='font-semibold mb-10'>Business</p>

                    </div>
                    <div className="w-full rounded-md lg:h-full">
                        <img
                            src={photography}
                            alt=""
                            className="w-full h-full object-center object-fill lg:w-full lg:h-full hover:scale-105 ease-in duration-100"
                        />
                        <p className='font-semibold mb-10'>Photography</p>

                    </div>
                    <div className="w-full rounded-md lg:h-full">
                        <img
                            src={music}
                            alt=""
                            className="w-full h-full object-center object-fill lg:w-full lg:h-full hover:scale-105 ease-in duration-100"
                        />
                        <p className='font-semibold mb-10'>Music</p>

                    </div>
                </div>

            </div>

        </div>


    )
}
