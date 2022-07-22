import React from 'react'
import instructor2 from '../asstes/instructor2.jpg'

export default function UdemyBusiness() {
    return (
        <div className='container mx-auto flex items-center mb-16'>
            <div className='w-1/2 flex items-end justify-end object-right mr-12'>
                <img className='' src={instructor2} alt="" />
            </div>
            <div className='w-1/2 ml-12'>
                <h1 className='text-3xl font-bold'>Become an Instructor</h1>
                <p className='text-lg'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                <button className='bg-black py-3 px-3 font-semibold text-white mt-4'>Start teching today</button>
            </div>


        </div>
    )
}
