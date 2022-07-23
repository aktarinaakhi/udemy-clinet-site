import React from 'react'
import { Link } from 'react-router-dom'
import Python from './courses/Python'

export default function BoardSelectionOfCourses() {

    return (
        <div className='container mx-auto'>
            <div className='mx-32'>
                <h1 className='text-3xl font-bold mt-11 '>A broad selection of courses</h1>
                <h4 className='text-lg mt-2 footer-logo'>Choose from 185,000 online video courses with new additions published every month</h4>

                <div className='text-lg font-semibold footer-logo mt-5'>

                    <ul className="flex text-gray-600">
                        <li className="mr-6">
                            <Link to="/python">
                                <span className=" hover:text-black" href="python">Python</span>
                            </Link>
                        </li>
                        <li className="mr-6">
                            <a className=" hover:text-black" href="#">Excel</a>
                        </li>
                        <li className="mr-6">
                            <a className=" hover:text-black" href="#">Web Deveboplent</a>
                        </li>
                        <li className="mr-6">
                            <a className="cursor-not-allowed" href="#">Javascript</a>
                        </li>
                        <li className="mr-6">
                            <a className="cursor-not-allowed" href="#">Data Science</a>
                        </li>
                        <li className="mr-6">
                            <a className="cursor-not-allowed" href="#">AWS Certification</a>
                        </li>
                        <li className="mr-6">
                            <a className="cursor-not-allowed" href="#">Drowing</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}
