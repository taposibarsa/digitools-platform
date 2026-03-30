import React from 'react';
import logo from '../../assets/DigiTools.png'
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
    return (
        <div className=' border-b border-[#F2F2F2]'>
            <div className=" navbar container mx-auto p-6.5">
                <div className="navbar-start">
                    <div className="">
                        <img className='w-45 h-10' src={logo} alt="BrandName" />
                    </div>
                </div>
                <div className="navbar-center ">
                    <ul className="flex space-x-8 font-semibold text-[16px]">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <BsCart2 className='text-2xl font-bold' />
                    <p className='font-bold'>Login</p>
                    
                    <button className='px-4 py-3 text-white font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;