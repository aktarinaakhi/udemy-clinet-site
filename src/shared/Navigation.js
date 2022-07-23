import React from 'react'
import logo from '../asstes/logo-udemy.png'


import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="flex items-center justify-between flex-wrap p-3 shadow-lg text-sm">
            <div className="flex items-center flex-shrink-0 text-black ml-4">

                <Link to="/"><img className='w-full' src={logo} alt="" /></Link>
                <span className='mx-5'>Categories</span>

            </div>

            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border-2 rounded text-black border-blue-500 hover:text-orange-600 hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mr-4">

                <div className="relative lg:flex-grow items-center">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full" placeholder="Search for anything" required />
                </div>

                <div>
                    <span className='block mt-4 lg:inline-block ml-5'>Udemy Business</span>
                    <span className='block mt-4 lg:inline-block ml-5'>Teach On Udemy</span>
                    <span className='block mt-4 lg:inline-block mx-5 text-xl'><BsCart3 /></span>

                    <span className="block font-semibold border py-2 px-3 border-black  mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                        Log in
                    </span>
                    <span className=" bg-black font-semibold text-md rounded-none block mt-4 lg:inline-block lg:mt-0 text-white py-2 px-3 mr-4">
                        Sign up
                    </span>
                </div>

            </div>
        </nav>
    )
}
