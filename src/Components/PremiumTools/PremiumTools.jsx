import React, { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const PremiumTools = ({ promiseData }) => {
    console.log(promiseData)
    const data = use(promiseData)
    console.log(data)

    
    return (
        <div>
            <div className='w-11/12 mx-auto p-30 '>
                <div className='space-y-2.5'>
                    <h2 className='text-[#101727] text-center text-5xl font-extrabold'>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    <div className='text-center'>
                        <div className='inline-flex p-1 justify-center gap-4 mt-8 border rounded-full border-[#d4d2d2]'>
                            <button className='px-4 py-3 text-white font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'> Products</button>
                            <button className=' text-[#25065D] text-[16px] font-bold rounded-full border-[#d4d2d2] border  px-4 py-3 hover:text-white hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA]  '> Cart</button>
                        </div>
                    </div>
                </div>
                <div className='max-w-6xl mx-auto px-4 py-16'>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {data.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
                </div>
            </div>

        </div>
    );
};

export default PremiumTools;