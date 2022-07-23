import React from 'react'
import Banner from './Banner'
import BecomeAnInstructor from './BecomeAnInstructor'
import BoardSelectionOfCourses from './BoardSelectionOfCourses'
import Brands from './Brands'
import FeaturedTopicsByCategory from './FeaturedTopicsByCategory'
import StudentsAreViewing from './StudentsAreViewing'
import TopCategorys from './TopCategorys'
import Transform from './Transform'
import UdemyBusiness from './UdemyBusiness'
import Footer from '../shared/Footer'

export default function Home() {
    return (
        <div>
            <Banner />
            <BoardSelectionOfCourses />
            <StudentsAreViewing />
            <TopCategorys />
            <FeaturedTopicsByCategory />
            <BecomeAnInstructor />
            <Brands />
            <UdemyBusiness />
            <Transform />
            <Footer />

        </div>
    )
}
