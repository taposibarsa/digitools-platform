import React from 'react';
import dotCircle from '../../../assets/dotCircle.png'
import bannerImg from '../../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div className='flex container items-center mx-auto gap-15 my-21.25'>
                <div className='banner-content'>
                    <div className="w-[50%] rounded-full px-4! py-2! bg-[#E1E7FF] font-bold flex items-center "> 
                        <img src={dotCircle} alt="" />
                        <p className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '>New: AI-Powered Tools Available</p> 
                    </div>
                    <h1 className='text-[#101727] text-7xl font-extrabold leading-20'>Supercharge Your <br></br> Digital Workflow</h1>

                </div>
                <div className='banner-image'>
                    <img src={bannerImg} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Banner;