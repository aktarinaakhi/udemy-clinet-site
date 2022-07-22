import React from 'react'
import brand1 from '../asstes/brand1.jpg'
import brand2 from '../asstes/brand2.jpg'
import brand3 from '../asstes/brand3.jpg'
import brand4 from '../asstes/brand4.jpg'
import brand5 from '../asstes/brand5.jpg'

export default function Brands() {
    return (
        <div className='bg-slate-50 py-10'>
            <div className='container mx-auto'>
                <h1 className='text-2xl text-center font-semibold'>Trusted by companies of all sizes</h1>
                <div className='w-1/3 flex items-center justify-center'>
                    <div className='w-1/3'>
                        <img className='' src={brand1} alt="" />
                    </div>
                    <div className='w-1/6'>
                        <img src={brand2} alt="" />
                    </div>
                    <div className='w-1/6 '>
                        <img src={brand5} alt="" />
                    </div>

                    <div className='w-1/3'>
                        <img src={brand3} alt="" />
                    </div>

                    <div className='w-1/3'>
                        <img src={brand4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
// w-4/12