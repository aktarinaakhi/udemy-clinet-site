import React from 'react'
import transform from '../asstes/transform.jpg'

export default function Transform() {
    return (
        <div className='container mx-auto flex items-center mb-16'>
            <div className='w-1/2 flex items-end justify-end object-right mr-12'>
                <img className='' src={transform} alt="" />
            </div>
            <div className='w-1/4 ml-12'>
                <h1 className='text-3xl font-bold'>Transform your life through education</h1>
                <p className='text-lg'>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                <button className='bg-black py-3 px-3 font-semibold text-white mt-4'>Find out how</button>
            </div>


        </div>
    )
}
