import React from 'react';

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility}=job;
    return (
        <div >
            <img className='h-9 w-56' src={logo} alt="" />
            <h1 className='text-2xl font-bold'>{job_title}</h1>
            <button className='bg-violet-300 text-white font-bold p-3 rounded mt-4 mr-4'>{remote_or_onsite}</button>
            <button className='bg-violet-300 text-white font-bold p-3 rounded mt-4'>{job_type}</button>
            <div className='md:flex'>
                <h1 className='text-gray-400'>{location}</h1>
                <h1 className='text-gray-400 ml-4'>{salary}</h1>
            </div>
            <button className='bg-violet-300 text-white font-bold p-3 rounded mt-4'>View Details</button>
            
        </div>
    );
};

export default Job;