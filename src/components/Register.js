import React from 'react'

export default function Register() {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 footer-logo">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-5 text-left text-md font-semibold text-gray-900 footer-logo">
                    Sign up and start learning
                </h2>
                <form className="w-4/5" action="#" method="POST">

                    <div className="mb-4 flex flex-wrap w-full relative items-center border justify-center border-black">
                        <input
                            className="flex-shrink flex-grow leading-normal w-px flex-1 border-grey-light rounded-l-none px-3 self-center relative  font-roboto text-md outline-none py-4"
                            id="name"
                            type="email"
                            placeholder="Full name" />
                    </div>

                    <div className="mb-4 flex flex-wrap w-full relative items-center border justify-center border-black">
                        <input
                            className="flex-shrink flex-grow leading-normal w-px flex-1 border-grey-light rounded-l-none px-3 self-center relative  font-roboto text-md outline-none py-4"
                            id="email"
                            type="email"
                            placeholder="Email" />
                    </div>

                    <div className="mb-4 flex flex-wrap w-full relative items-center border justify-center border-black">
                        <input
                            className="flex-shrink flex-grow leading-normal w-px flex-1 py-4 border-grey-light  rounded-l-none px-3 self-center relative  font-roboto text-md outline-none "
                            id="password"
                            type="password"
                            placeholder="Password" />
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-black bg-black rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Send me special offers, personalized recommendations, and learning tips</label>
                    </div>

                    <div>
                        <input type="submit" className="group relative w-full flex justify-center px-4 border  font-medium bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 mb-5 py-3 text-white" name="Log In" value="Sign Up" />
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
                        {/* <Link to='/register'>
        <button className="ml-3 underline text-purple-700 font-semibold">Sign Up</button>

    </Link> */}
                        <p className='text-purple-700 font-semibold'>Log in with your organization</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
