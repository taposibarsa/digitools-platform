import React from 'react';
import dotCircle from '../../../assets/dotCircle.png'
import bannerImg from '../../../assets/banner.png'
import play from '../../../assets/Play.png'

const Banner = () => {
    return (
        <div>
            <div className='flex container justify-center items-center mx-auto gap-15 my-21.25'>
                <div className='banner-content'>
                    <div className="w-[50%] rounded-full px-4! py-2! bg-[#E1E7FF] font-bold flex items-center ">
                        <img src={dotCircle} alt="" />
                        <p className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className='text-[#101727] text-7xl font-extrabold leading-20 mt-4'>Supercharge Your <br></br> Digital Workflow</h1>
                    <p className='text-[#627382] text-[18px] leading-8 mt-5'>Access premium AI tools, design assets, templates, and productivity <br></br>
                        software—all in one place. Start creating faster today. <br></br>
                        Explore Products
                    </p>
                    <div className='flex gap-4 mt-8'>
                        <button className='px-4 py-3 text-white font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
                        <button className='flex gap-2 items-center text-[16px] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-[#9243fa] border-2 rounded-full px-4 py-3 '> <img src={play} alt="" />  Watch Demo</button>
                    </div>

                </div>
                <div className='banner-image'>
                    <img src={bannerImg} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Banner;