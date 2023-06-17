import Link from 'next/link';
import React from 'react';


const NavData = () => {

    return (
        <div>
            <div
                className="absolute hidden md:block top-15 rounded-2xl px-6 bg-white shadow-2xl border-[1px] cursor-pointer"

            >
                <div className="p-3 grid-cols-1 md:grid-cols-3">

                    <div>
                        <li className="text-sm font-semibold hover:text-blue-600 my-3">
                            <Link href="/">

                            </Link>
                        </li>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavData;