import React from 'react';

const SingleJobCategory = ({category}) => {
    const {logo,category_name,availability}=category;
    return (
        <div className='p-4'>
            <img className='h-10 w-10' src={logo} alt="" />
            <p className='text-2xl font-bold'>{category_name}</p>
            <p className='text-gray-400'>{availability}</p>
        </div>
    );
};

export default SingleJobCategory;