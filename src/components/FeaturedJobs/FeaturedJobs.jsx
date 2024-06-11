import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data)
            })
    }, [])
    const [data, setData] = useState(4)
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Featured Jobs</h1>
            <p className='text-gray-400 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:grid grid-cols-2 gap-4 p-4 ml-6'>
                {jobs.slice(0, data).map(job => <Job job={job}></Job>)}
            </div>
            <div className={data===jobs.length?'hidden':''}>
                <button onClick={() => setData(jobs.length)} className='btn btn-primary  p-4 mx-auto text-center'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;