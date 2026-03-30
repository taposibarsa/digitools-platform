import React from 'react';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import profile from '../../assets/profile.png'
import cube from '../../assets/cube.png'
import rocket from '../../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='w-11/12 mx-auto p-30 '>
                <div className='space-y-2.5'>
                    <h2 className='text-[#101727] text-center text-5xl font-extrabold'>Get Started in 3 Steps</h2>
                    <p className='text-[#627382] text-center'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='flex justify-center gap-7.5 mt-10 '>
                    <div className='w-95 py-20.5 relative p-5 bg-white border border-[#F1F1F1]  rounded-2xl space-y-4'>
                        <img className='absolute top-5 right-5' src={img1} alt="" />
                        <img className='mx-auto' src={profile} alt="" />
                        <h3 className='text-[#101727] text-2xl font-bold text-center'>Create Account</h3>
                        <p className='text-[#627382] text-[16px] text-center'> Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                    <div className='w-95 py-20.5 relative p-5 bg-white border border-[#F1F1F1]  rounded-2xl space-y-4'>
                        <img className='absolute top-5 right-5' src={img2} alt="" />
                        <img className='mx-auto' src={cube} alt="" />
                        <h3 className='text-[#101727] text-2xl font-bold text-center'>Create Account</h3>
                        <p className='text-[#627382] text-[16px] text-center'> Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                    <div className='w-95 py-20.5 relative p-5 bg-white border border-[#F1F1F1]  rounded-2xl space-y-4'>
                        <img className='absolute top-5 right-5' src={img3} alt="" />
                        <img className='mx-auto' src={rocket} alt="" />
                        <h3 className='text-[#101727] text-2xl font-bold text-center'>Create Account</h3>
                        <p className='text-[#627382] text-[16px] text-center'> Sign up for free in seconds. No credit card required to get started.</p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default GetStarted;