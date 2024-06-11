import React from 'react';

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility}=job;
    return (
        <div >
            <img className='h-9 w-56' src={logo} alt="" />
            <h1 className='text-2xl font-bold'>{job_title}</h1>
            <button className='border-violet-400 rounded color-violet-400 mr-4'>{remote_or_onsite}</button>
            <button className='border-violet-400'> {job_type}</button>
            
        </div>
    );
};

export default Job;