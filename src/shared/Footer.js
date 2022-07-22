import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import logo from '../asstes/logo-udemy-inverted__1_-removebg-preview.png'
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
    return (
        <div className='bg-gray-900'>
            <div className='text-center mt-10 container mx-auto'>
                <div className='py-5 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-1   px-16 text-md' >

                    <div className='text-white text-left'>
                        <h2 className="pb-3 text-md bold">Udemy Business</h2>
                        <p>Teach on udemy</p>
                        <p>Get the app</p>
                        <p>About us</p>
                    </div>
                    <div className='text-white text-left'>
                        <h2 className="pb-3 text-md bold">Careers</h2>
                        <p>Blog</p>
                        <p>Help and Support</p>
                        <p>Affliliate</p>
                        <p>Investors</p>
                    </div>
                    <div className='text-white text-left'>
                        <h4 className="pb-3 text-md bold">Terms</h4>
                        <p>Privacy and policy </p>
                        <p>cookies settings</p>
                        <p>sitemap</p>
                        <p>Accecibilty statement</p>
                    </div>
                    <div className='text-white text-left text-lg'>
                        <button className='border border-white py-2 px-4 flex justify-center items-center'><span className='mr-2'><AiOutlineGlobal /></span> English</button>
                    </div>

                </div>
            </div>


            <div className='flex justify-around items-center'>
                <div>
                    <img className='w-4 p-0 m-0' src={logo} alt="" />
                    <h1 className='text-white font-bold text-2xl footer-logo p-0 m-0'>Udemy</h1>
                </div>
                <div className='text-white flex justify-center items-center' >
                    <AiOutlineCopyrightCircle />
                    <p>2022 Udemy, Inc.</p>
                </div>
            </div>
        </div>
    )
}
