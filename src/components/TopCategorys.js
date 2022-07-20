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
            <h1>Top categories</h1>
            <div className="max-w-2xl mx-auto pt-16 px-4 lg:pb-1 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-1">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-1">

                    <div className="group relative hover:shadow-lg px-3 lg:h-4/5">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-1/2 lg:aspect-none">
                            <img
                                src={design}
                                alt=""
                                className="w-full h-full object-center object-fill lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-900">  </h3>
                                <p className="mt-1 text-sm text-gray-500"></p>
                                <p className="text-sm font-medium text-orange-500 mt-2">$ </p>

                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>

    )
}
