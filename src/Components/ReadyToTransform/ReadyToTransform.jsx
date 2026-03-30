import React from 'react';

const ReadyToTransform = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='w-11/12 mx-auto py-28.5  space-y-10'>
                <div className='text-center'>
                    <h2 className='text-[40px] text-white font-extrabold'>Ready to Transform Your Workflow?</h2>
                    <p className='text-[16px] text-[#ecd7fc] mt-3'>Join thousands of professionals who are already using Digitools to work smarter. <br></br> Start your free trial today.</p>
                </div>
                <div className=''>
                    <div className='flex gap-5 justify-center'>
                        <button className='px-4 py-3 rounded-full bg-white text-[#9514FA]'>Explore Products</button>
                        <button className='px-4 py-3  rounded-full text-white border border-white '>Explore Products</button>
                    </div>
                    <div> 
                        <p className='text-[16px] text-[#ecd7fc] mt-3 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadyToTransform;