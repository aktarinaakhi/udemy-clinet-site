import React from 'react'
import instructor2 from '../asstes/instructor2.jpg'
import logo_UB from '../asstes/logo-ub.jpg'

export default function UdemyBusiness() {
    return (
        <div className='container mx-auto flex items-center my-16'>

            <div className='w-1/2 mr-12  flex items-end justify-end object-right'>
                <div className='w-1/2'>
                    <img className='w-10/12 mb-2' src={logo_UB} alt="" />
                    <p className='text-lg'>Get unlimited access to 16,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</p>
                    <button className='bg-black py-3 px-3 font-semibold text-white mt-4'>Get Udemy business</button>
                </div>

            </div>
            <div className='w-1/2 ml-12  flex items-start justify-start object-left'>
                <img className='' src={instructor2} alt="" />
            </div>
        </div>
    )
}
