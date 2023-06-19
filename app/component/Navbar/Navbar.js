"use client"
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [up, setUp] = useState(false)
    const [down, setDown] = useState(false)
    const [client, setClient] = useState(false)
    const [service, setService] = useState(false)


    return (
        <nav className='bg-white shadow-2xl'>
            <div className='flex items-center font-medium justify-between w-11/12 mx-auto'>
                <div className='flex relative justify-between p-5 md:w-auto w-full'>
                    <img className='md:cursor-pointer h-10 w-20' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b438e95ec276_logo_talk-01-01.svg" alt="" />
                    <div className='text-3xl md:hidden  z-50 left-4 block' onClick={() => setOpen(!open)}>
                        {/* <FaBars name={`${open ? 'close' : 'menu'}`} /> */}
                        {
                            !open ? <FaBars /> : <FaTimes />
                        }

                    </div>
                </div>

                <div className='md:flex relative hidden items-center justify-between'>
                    {/* for desktop and tablet */}
                    <ul className='md:flex hidden uppercase gap-4 font-[Roboto Mono] items-center'>


                        <NavLinks />

                    </ul>
                    <div className='md:block ml-10 hidden'>
                        <button className='bg-yellow-300  px-14 py-4 rounded text-black'>
                            Contact Us
                        </button>
                    </div>
                </div>


                {/* for mobile device responsive */}
                <ul className={`md:hidden bg-white absolute m-3 w-11/12 mx-auto top-0 py-6 rounded-2xl mt-20  pl-4 mb-6 z-50  duration-500 ${open ? 'top-0' : 'top-[-100%] mb-10'}`}>
                    <div>
                        <button className='bg-yellow-300  px-14 py-4 rounded text-black'>
                            Contact Us
                        </button>
                    </div>

                    <div>
                        <li>
                            <h1 onClick={() => setService(!service)} className="py-4 flex  items-center">
                                Our Service
                                {service ? (
                                    <AiOutlineCaretUp />
                                ) : (
                                    <AiOutlineCaretDown />
                                )}
                            </h1>
                            {
                                service && <div className="absolute  md:hidden block top-15 rounded-2xl px-6 bg-white shadow-2xl border-[1px] cursor-pointer">
                                    <ul className='text-sm font-semibold   my-3'>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Photo Shoting
                                        </li>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Content Creation
                                        </li>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            SponsorShip
                                        </li>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Performance
                                        </li>

                                    </ul>
                                </div>
                            }
                        </li>
                    </div>
                    <div>
                        <li>
                            <h1 onClick={() => setClient(!client)} className="py-4 flex  items-center">
                                Our Client
                                {client ? (
                                    <AiOutlineCaretUp />
                                ) : (
                                    <AiOutlineCaretDown />
                                )}
                            </h1>
                            {
                                !down && !service && client && <div className="absolute  md:hidden block top-15 rounded-2xl px-6 bg-white shadow-2xl border-[1px] cursor-pointer">
                                    <ul className='text-sm font-semibold   my-3'>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Resturent
                                        </li>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Franchise
                                        </li>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Hotel
                                        </li>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Performance
                                        </li>

                                    </ul>
                                </div>
                            }
                        </li>
                    </div>
                    {/* Our values */}
                    <div>
                        <li>
                            <h1 onClick={() => setUp(!up)} className="py-4 flex  items-center">
                                Values
                                {up ? (
                                    <AiOutlineCaretUp />
                                ) : (
                                    <AiOutlineCaretDown />
                                )}
                            </h1>
                            {
                                !down && !service && !client && up && <div className="absolute  md:hidden block top-15 rounded-2xl px-6 bg-white shadow-2xl border-[1px] cursor-pointer">
                                    <ul className='text-sm font-semibold   my-3'>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Testimonial
                                        </li>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Result
                                        </li>


                                    </ul>
                                </div>
                            }
                        </li>
                    </div>
                    <li className='py-4 cursor-pointer'>Blog</li>
                    <li className='py-4 cursor-pointer'>Prices</li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;