import React from 'react';
import { FcCheckmark } from "react-icons/fc";

const TransparentPricing = () => {
    return (
        <div>
            <div className=' mx-auto p-30 '>
                <div className='space-y-2.5'>
                    <h2 className='text-[#101727] text-center text-5xl font-extrabold'>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='flex justify-center mt-10  gap-7.5'>
                    <div className='border-[#dadada] border bg-[#f9fafc] rounded-2xl p-6 space-y-6 w-95 flex flex-col'>
                        <div>
                            <h3 className='tex[#101727] text-2xl font-bold'>Starter</h3>
                            <p className='text-[#627382] text-[16px]'>Perfect for getting started</p>
                        </div>
                        <div className='flex items-center'>
                            <h3 className='tex[#101727] text-[40px] font-bold'>$0</h3>
                            <p className='text-[#627382] text-[20px]'>/Month</p>
                        </div>
                        <div>
                            <ul className='list-none'>
                                <li className='flex items-center gap-2 text-[16px]'><FcCheckmark /> Access to 10 free tools</li>
                                <li className='flex items-center gap-2 text-[16px]'><FcCheckmark /> Basic templates</li>
                                <li className='flex items-center gap-2 text-[16px]'><FcCheckmark /> Community support</li>
                                <li className='flex items-center gap-2 text-[16px]'><FcCheckmark /> 1 project per month</li>
                            </ul>
                        </div>
                        <div className='mt-auto'>
                            <button className='w-full px-4 py-3 text-white font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Get Started Free</button>
                        </div>
                    </div>
                    <div className='relative text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl p-6 space-y-6 w-95'>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <div className="badge  text-[#BB4D00] bg-[#FEF3C6] badge-soft badge-warning">
                                Most popular
                            </div>
                        </div>
                        <div>
                            <h3 className=' text-2xl font-bold'>Pro</h3>
                            <p className=' text-[16px]'>Best for professionals</p>
                        </div>
                        <div className='flex items-center'>
                            <h3 className=' text-[40px] font-bold'>$0</h3>
                            <p className=' text-[20px]'>/Month</p>
                        </div>
                        <div>
                            <ul className='list-none text-[16px]'>
                                <li className='flex items-center gap-2 '><FcCheckmark /> Access to all premium tools</li>
                                <li className='flex items-center gap-2 '><FcCheckmark /> Unlimited templates</li>
                                <li className='flex items-center gap-2 '><FcCheckmark /> Priority support</li>
                                <li className='flex items-center gap-2 '><FcCheckmark /> Unlimited projects</li>
                                <li className='flex items-center gap-2'><FcCheckmark />Cloud sync</li>
                                <li className='flex items-center gap-2'><FcCheckmark /> Advanced analytics</li>
                            </ul>
                        </div>

                        <div>
                            <button className='w-full px-4 py-3 bg-white text-[#9514FA] font-bold rounded-full '>Get Started Free</button>
                        </div>
                    </div>
                    <div className='border-[#dadada] border bg-[#f9fafc] rounded-2xl p-6 space-y-6 w-95'>
                        <div>
                            <h3 className='tex[#101727] text-2xl font-bold'>Enterprize</h3>
                            <p className='text-[#627382] text-[16px]'>For teams and businesses</p>
                        </div>
                        <div className='flex items-center'>
                            <h3 className='tex[#101727] text-[40px] font-bold'>$99</h3>
                            <p className='text-[#627382] text-[20px]'>/Month</p>
                        </div>
                        <div>
                            <ul className='list-none'>
                                <li className='flex items-center gap-2 text-[16px]'><FcCheckmark /> Everything in Pro</li>
                                <li className='flex items-center gap-2 text-[16px]'><FcCheckmark /> Team collaboration</li>
                                <li className='flex items-center gap-2 text-[16px]'><FcCheckmark /> Custom integrations</li>
                                <li className='flex items-center gap-2 text-[16px]'><FcCheckmark /> Dedicated support</li>
                                <li className='flex items-center gap-2 text-[16px]'><FcCheckmark /> SLA guarantee</li>
                                <li className='flex items-center gap-2 text-[16px]'><FcCheckmark /> Custom branding</li>
                            </ul>
                        </div>
                        <div>
                            <button className='w-full px-4 py-3 text-white font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Get Started Free</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default TransparentPricing;