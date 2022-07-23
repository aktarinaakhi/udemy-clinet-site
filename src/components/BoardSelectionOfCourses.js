import React from 'react'
import { Tab } from '@headlessui/react'
import Python from './courses/Python'

export default function BoardSelectionOfCourses() {

    return (
        <div className='container mx-auto'>
            <div className='mx-32'>
                <h1 className='text-3xl font-bold mt-11 '>A broad selection of courses</h1>
                <h4 className='text-lg mt-2 footer-logo'>Choose from 185,000 online video courses with new additions published every month</h4>


                <Tab.Group>
                    <Tab.List className="text-gray-600 text-lg font-semibold footer-logo mt-4">
                        <Tab className="mr-6">Python</Tab>
                        <Tab className="mr-6">Excel</Tab>
                        <Tab className="mr-6">Javascript</Tab>
                        <Tab className="mr-6">Data Science</Tab>
                        <Tab className="mr-6">AWS Certification</Tab>
                        <Tab className="mr-6">Drowing</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel className="border px-8 py-10 my-4"><Python></Python></Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>


        </div>
    )
}
