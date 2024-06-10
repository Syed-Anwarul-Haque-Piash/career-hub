import React from 'react';
import pic from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className='mt-6 md:flex'>
            <div className='p-4'>
                <h1 className='text-6xl'>One Step <br /> Closer To Your <br /> <span className='text-violet-300'>Dream Job</span></h1>
                <p className='text-gray-400 mt-4'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='bg-violet-300 text-white font-bold p-3 rounded mt-4'>Get Started</button>
            </div>
            <div>
                <img className='w-3/4 h-2/3' src={pic} alt="" />
            </div>
        </div>
    );
};

export default Banner;