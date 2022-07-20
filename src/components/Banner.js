import React from 'react'
import banner from '../asstes/banne.jpg'

export default function Banner() {
    return (
        <div className='pt-3 lg:flex lg:items-center relative justify-center'>
            <img className='' src={banner} alt="" />
            <div className='absolute bg-white shadow p-5 text-left left-96 w-1/5'>
                <h1 className='text-4xl font-semibold'>Log in for savings</h1>
                <p className='text-lg mt-3'>We have special savings for logged-in visitors. See how much you can save.</p>
            </div>

        </div>
    )
}
