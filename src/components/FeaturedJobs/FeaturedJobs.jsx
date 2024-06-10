import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setJobs(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Featured Jobs</h1>
            <p className='text-gray-400 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {jobs.map(job=><Job job={job}></Job>)}
            </div>
        </div>
    );
};

export default FeaturedJobs;