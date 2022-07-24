import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

export default function Login() {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 footer-logo">
            <div className="max-w-md w-full space-y-8">
                <div>

                    <h2 className="my-5 text-left text-md font-semibold text-gray-900 footer-logo">
                        Log In to Your Udemy Account!
                    </h2>
                    <hr />
                </div>

                <div>
                    <button class="px-4 w-4/5 py-3 mb-4 font-semibold border shadow inline-flex items-center space-x-2 rounded">
                        <svg
                            class="w-5 h-5 text-blue-600 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                            />
                        </svg>
                        <span>Continue with Facebook</span>
                    </button>
                    <button class="px-4 w-4/5 py-3 mb-4 font-semibold border shadow inline-flex items-center space-x-2 rounded">
                        <FcGoogle className='w-5 h-5' />
                        <span>Continue with Google</span>
                    </button>
                    <button class="px-4 w-4/5 py-3 font-semibold border shadow inline-flex items-center space-x-2 rounded">
                        <AiFillApple className='w-5 h-5' />
                        <span>Continue with Apple</span>
                    </button>
                </div>

                {/* form  */}

                <form className="w-4/5" action="#" method="POST">

                    <div className="mb-4 flex flex-wrap w-full relative items-center border justify-center border-black">
                        <div class="flex -mr-px justify-center w-15 p-4 items-center">
                            <span className="absolute flex items-center mx-4 leading-normal whitespace-no-wrap text-gray-400">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </span>
                        </div>
                        <input
                            className="flex-shrink flex-grow leading-normal w-px flex-1 h-10 border-grey-light rounded-l-none px-3 self-center relative  font-roboto text-md outline-none"
                            id="email"
                            type="email"
                            placeholder="Email" />
                    </div>

                    <div className="mb-4 flex flex-wrap w-full relative items-center border justify-center border-black">
                        <div class="flex -mr-px justify-center w-15 p-4 items-center">
                            <span className="absolute flex items-center mx-4 leading-normal whitespace-no-wrap">
                                <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </div>


                        <input
                            className="flex-shrink flex-grow leading-normal w-px flex-1 h-10 border-grey-light  rounded-l-none px-3 self-center relative  font-roboto text-md outline-none "
                            id="password"
                            type="password"
                            placeholder="Password" />
                    </div>

                    <div>
                        <input type="submit" className="group relative w-full flex justify-center px-4 border  font-medium bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 mb-5 py-3 text-white" name="Log In" value="Log In" />
                    </div>

                    <div className="flex items-center justify-center text-center mb-5">
                        <div className="text-sm">
                            <a href="#" className="font-medium">
                                Or <span className='font-semibold text-purple-800'>Forgot Password</span>
                            </a>
                        </div>
                    </div>

                    <div className='text-center'>
                        <span>Don't have an account?</span>
                        <Link to='/register'>
                            <button className="ml-3 underline text-purple-700 font-semibold">Sign Up</button>

                        </Link>
                        <p className='text-purple-700 font-semibold'>Log in with your organization</p>
                    </div>
                </form>

            </div>
        </div>
    )
}
