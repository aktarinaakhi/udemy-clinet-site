import React from 'react'
import brand1 from '../asstes/brand1.jpg'
import brand2 from '../asstes/brand2.jpg'
import brand3 from '../asstes/brand3.jpg'
import brand4 from '../asstes/brand4.jpg'
import brand5 from '../asstes/brand5.jpg'

export default function Brands() {
    return (
        <div className='bg-slate-50 py-10 relative container mx-auto'>
            <h1 className='text-2xl text-center font-semibold'>Trusted by companies of all sizes</h1>
            <div className='grid grid-cols-5 justify-center items-center content-center self-center place-content-center place-items-center flex-col absolute '>
                <div>
                    <img className='' src={brand1} alt="" />
                </div>
                <div>
                    <img className='w-1/2' src={brand2} alt="" />
                </div>
                <div>
                    <img className='w-1/2' src={brand5} alt="" />
                </div>

                <div>
                    <img src={brand3} alt="" />
                </div>

                <div>
                    <img src={brand4} alt="" />
                </div>
            </div>
        </div>
    )
}
// w-4/12