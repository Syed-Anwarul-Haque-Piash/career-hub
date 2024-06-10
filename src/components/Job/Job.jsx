import React from 'react';

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility}=job;
    return (
        <div>
            This sis job
        </div>
    );
};

export default Job;