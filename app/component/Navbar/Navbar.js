"use client"
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Button from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Links } from './NavData';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [up, setUp] = useState(false)
    const [down, setDown] = useState(false)


    return (
        <nav className='bg-white shadow-2xl'>
            <div className='flex items-center font-medium justify-around'>
                <div className='z-50 flex  justify-between p-5 md:w-auto w-full'>
                    <img className='md:cursor-pointer h-10 w-20' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b438e95ec276_logo_talk-01-01.svg" alt="" />
                    <div className='text-3xl md:hidden block' onClick={() => setOpen(!open)}>
                        {/* <FaBars name={`${open ? 'close' : 'menu'}`} /> */}
                        {
                            open ? <FaBars /> : <FaTimes />
                        }

                    </div>
                </div>

                <div className='md:flex hidden items-center justify-between'>
                    {/* for desktop and tablet */}
                    <ul className='md:flex hidden uppercase gap-8 font-[Roboto Mono] items-center'>


                        <NavLinks />

                    </ul>
                    <div className='md:block ml-10 hidden'>
                        <Button />
                    </div>
                </div>


                {/* for mobile device responsive */}
                <ul className={`md:hidden bg-white absolute w-full top-0 py-24 pl-4  duration-500 ${open ? 'top-0' : 'top-[-100%]'}`}>
                    <div>
                        <Button />
                    </div>
                    <NavLinks></NavLinks>
                    {/* <li>
                        <h1 onClick={() => setUp(!up)} className="py-4 flex items-center">
                            Our service
                            {up ? (
                                <AiOutlineCaretUp />
                            ) : (
                                <AiOutlineCaretDown />
                            )}
                        </h1>
                        {
                            up && <div className="absolute  md:hidden block top-15 rounded-2xl px-6 bg-white shadow-2xl border-[1px] cursor-pointer">
                                <ul className='text-sm font-semibold  my-3'>
                                    <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                        Our food
                                    </li>
                                    <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                        Photo Shooting
                                    </li>
                                    <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                        Content Creation
                                    </li>
                                    <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                        Sponsorship
                                        Performance
                                    </li>

                                </ul>
                            </div>
                        }
                    </li>
                    <div>
                        <li>
                            <h1 onClick={() => setDown(!down)} className="py-4 flex  items-center">
                                Our service
                                {down ? (
                                    <AiOutlineCaretUp />
                                ) : (
                                    <AiOutlineCaretDown />
                                )}
                            </h1>
                            {
                                down && <div className="absolute  md:hidden block top-15 rounded-2xl px-6 bg-white shadow-2xl border-[1px] cursor-pointer">
                                    <ul className='text-sm font-semibold  my-3'>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Our food
                                        </li>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Photo Shooting
                                        </li>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Content Creation
                                        </li>
                                        <li className='hover:text-blue-600 py-2 hover:bg-gray-300 px-3 cursor-pointer '>
                                            Sponsorship
                                            Performance
                                        </li>

                                    </ul>
                                </div>
                            }
                        </li>
                    </div> */}


                </ul>
            </div>

        </nav>
    );
};

export default Navbar;