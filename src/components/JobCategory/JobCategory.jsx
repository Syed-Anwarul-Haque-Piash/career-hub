import React, { useEffect, useState } from 'react';
import SingleJobCategory from '../SingleJobCategory/SingleJobCategory';

const JobCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Job Category List</h1>
            <p className='text-gray-400 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:grid grid-cols-4'>
                {categories.map(category => <SingleJobCategory key={category.id} category={category}></SingleJobCategory>)}
            </div>
        </div>
    );
};

export default JobCategory;