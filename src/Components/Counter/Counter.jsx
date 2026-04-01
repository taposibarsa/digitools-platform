import React from 'react';

const Counter = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='container flex flex-col md:flex-row justify-center items-center mx-auto py-15'>
                <div className='border-r-[#ebd8fa] border-r px-31.25'>
                    <h2 className='text-white text-6xl font-extrabold pb-3'>50K+</h2>
                    <p className='text-[#e8d4f7] text-2xl '>Active Users</p>
                </div>
                <div className='border-r-[#ebd8fa] border-r px-31.25'>
                    <h2 className='text-white text-6xl font-extrabold pb-3'>200+</h2>
                    <p className='text-[#e8d4f7] text-2xl '>Premium Users</p>
                </div>
                <div className='px-31.25'>
                    <h2 className='text-white text-6xl font-extrabold pb-3'>4.9</h2>
                    <p className='text-[#e8d4f7] text-2xl '>Rating</p>
                </div>
            </div>


        </div>
    );
};

export default Counter;