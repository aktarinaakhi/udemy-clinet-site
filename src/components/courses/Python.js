import React, { useEffect, useState } from 'react'


export default function Python() {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/python.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    console.log(courses);
    return (
        <div className='text-md'>Python

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi sit nostrum ut totam, iste aut rerum sunt incidunt repellat fugit, consequatur eveniet minima voluptate doloribus fuga sint unde! Perspiciatis!</p>
        </div>
    )
}
