import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

const NavLinks = () => {
    const links = [
        {
            name: 'Our service',
            submenu: true,
            subLink: [
                { name: 'Photo Shooting' },
                { name: 'Content Creation' },
                { name: 'Sponsorship' },
                { name: 'Performance' },
            ],
        },
        {
            name: 'Our Client',
            submenu: true,
            subLink: [
                { name: 'Restaurant' },
                { name: 'Franchise' },
                { name: 'Hotel' },
                { name: 'Performance' },
            ],
        },
        {
            name: 'Our Values',
            submenu: true,
            subLink: [
                { name: 'Testimonials' },
                { name: 'Result' },
            ],
        },
        {
            name: 'Blog',
        },
        {
            name: 'Prices',
        },
    ];

    const [activeLink, setActiveLink] = useState(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const submenuRef = useRef(null);


    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (index) => {
        setActiveLink(index);
    };

    const handleMouseLeave = () => {
        const isHoveringSubmenu = submenuRef.current?.contains(event.relatedTarget);
        if (!isHoveringSubmenu) {
            setActiveLink(null);
        }
    };

    return (
        <>
            {links.map((link, index) => (
                <div key={index}>
                    <div
                        className="px-3 text-left md:cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {link.subLink ? (
                            <h1 className="py-4 flex items-center">
                                {link.name}
                                {activeLink === index ? (
                                    <AiOutlineCaretUp />
                                ) : (
                                    <AiOutlineCaretDown />
                                )}
                            </h1>


                        ) : (
                            <h1 className="py-4">{link.name}</h1>
                        )}

                    </div>

                    {(activeLink === index || windowWidth <= 768) && link.submenu && (
                        <div
                            className="z-50 absolute  hidden md:block top-15 rounded-2xl px-6 bg-white shadow-2xl border-[1px] cursor-pointer"
                            ref={submenuRef}
                        >
                            <div className="p-3 grid-cols-1 md:grid-cols-3">
                                {link.subLink?.map((mylinks, subIndex) => (
                                    <div key={subIndex}>
                                        <li className="text-sm font-semibold hover:text-blue-600 my-3">
                                            <Link href="/">
                                                <h1>{mylinks.name}</h1>
                                            </Link>
                                        </li>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* {(activeLink === index || windowWidth <= 768) && link.submenu && (
                        <div
                            className="flex ml-[20px]  md:hidden  top-15 rounded-2xl px-6 bg-white shadow-2xl border-[1px] cursor-pointer"
                            ref={submenuRef}
                        >
                            <div className="p-3  grid-cols-1 md:grid-cols-3">
                                {link.subLink?.map((mylinks, subIndex) => (
                                    <div key={subIndex}>
                                        <li className="text-sm font-semibold hover:text-blue-600 my-3">
                                            <Link href="/">
                                                <h1>{mylinks.name}</h1>
                                            </Link>
                                        </li>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )} */}


                </div>
            ))}
        </>
    );
};

export default NavLinks;
