import React from 'react'

export default function FeaturedTopicsByCategory() {
    return (
        <div className='bg-slate-50 py-16 my-20'>
            <div className='container mx-auto'>
                <h1 className='text-2xl font-bold xl:ml-32 '>Featured Topics by Category</h1>

                <div className="max-w-2xl mx-auto lg:max-w-7xl">
                    <div className="my-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">



                        <div className="w-full rounded-md lg:h-full">
                            <h1 className='font-semibold text-xl mb-5'>Development</h1>

                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Python</h4>
                                <p>35,805,781 students</p>
                            </div>

                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Web Development</h4>
                                <p>11,172,668 students</p>
                            </div>

                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Machine Learning</h4>
                                <p>6,982,360 students</p>
                            </div>


                        </div>

                        <div className="w-full rounded-md lg:h-full">

                            <h1 className='font-semibold mb-5 text-xl'>Business</h1>
                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Python</h4>
                                <p>35,805,781 students</p>
                            </div>

                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Web Development</h4>
                                <p>11,172,668 students</p>
                            </div>

                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Machine Learning</h4>
                                <p>6,982,360 students</p>
                            </div>

                        </div>


                        <div className="w-full rounded-md lg:h-full">

                            <h1 className='font-semibold mb-5 text-xl'>It and Software</h1>
                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Python</h4>
                                <p>35,805,781 students</p>
                            </div>

                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Web Development</h4>
                                <p>11,172,668 students</p>
                            </div>

                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Machine Learning</h4>
                                <p>6,982,360 students</p>
                            </div>
                        </div>

                        <div className="w-full rounded-md lg:h-full">

                            <h1 className='font-semibold mb-5 text-xl'>Design</h1>
                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Python</h4>
                                <p>35,805,781 students</p>
                            </div>

                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Web Development</h4>
                                <p>11,172,668 students</p>
                            </div>

                            <div className='mb-5'>
                                <h4 className='underline text-indigo-600 text-md font-semibold'>Machine Learning</h4>
                                <p>6,982,360 students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='xl:ml-32 border border-black py-2 px-3 font-semibold text--sm'>Explore more topics</button>
            </div>
        </div>
    )
}
