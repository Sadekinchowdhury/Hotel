import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaVolumeUp } from 'react-icons/fa';


const Footer = () => {

    const data = [
        {
            title: "Our Service",
            name1: "Photo Shoting",
            name2: "Content Creation",
            name3: "Sponsorship",
            name4: "Performance"
        },

        {
            title: "For Resturent",
            name1: "For kitchen",
            name2: "For dark kitchen",
            name3: "For Franchies",
            name4: "For Hotels",
            name5: "For hairdressers"
        },

        {
            title: "In regards to",
            name1: "Our History ",
            name2: "We are hiring",
            name3: "Blog",
            name4: "Aid"
        },


    ]

    return (
        <div className='mt-[350px]'>
            <div className='m-3 '>
                <div className='text-center  mx-auto items-center'>

                    <img className='w-36 h-12 mx-auto' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b438e95ec276_logo_talk-01-01.svg" alt="" />
                    <div>
                        <ul className='flex gap-10 text-center justify-center mt-6'>
                            <li className='bg-yellow-300 p-3 rounded-full'>
                                <FaInstagram className='w-5 h-5' />
                            </li>
                            <li className='bg-yellow-300 p-3 rounded-full'>
                                <FaFacebookF className='w-5 h-5' />
                            </li>
                            <li className='bg-yellow-300 p-3 rounded-full'>
                                <FaLinkedinIn className='w-5 h-5' />
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='mt-8' />
                <div className='grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='bg-yellow-50 border-[2px] text-left items-center justify-center rounded-2xl p-4'>
                        <h1 className='font-semibold flex items-center text-xl font-[Roboto Mono] gap-3 mt-3 mb-8'> Addition 📣</h1>


                        <p className='font-mono mb-8'>The reference CHR newsletter: starter-main course-dessert to be a hit on social networks!</p>

                        <div>

                        </div>
                        <div className='flex mb-12 justify-center items-center'>
                            <button className='bg-yellow-400 duration-200 hover:top-3 font-bold   font-[Roboto Mono] py-3 px-8 w-full rounded-lg'>I want to receive it <span>📩</span> </button>


                        </div>

                    </div>
                    {
                        data.map(list => <div>
                            <div className='p-8'>
                                <h1 className='font-[Roboto Mono] text-xl font-semibold mb-10'>{list.title}</h1>

                                <ul className='mt-8 cursor-pointer text-hover:bg-blue-600 text[hover:bg-blue-600]'>
                                    <li className='mt-6 cursor-pointer'>
                                        {list.name1}
                                    </li>
                                    <li className='mt-6'>
                                        {list.name2}
                                    </li>
                                    <li className='mt-6'>
                                        {list.name3}
                                    </li>
                                    <li className='mt-6'>
                                        {list.name4}
                                    </li>

                                </ul>
                            </div>
                        </div>
                        )
                    }
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className="text-center py-4 text-gray-500">
                    <p>
                        <span className="text-lg"></span> TALK &copy; 2022 Tous droits réservés mentions légales | politique de confidentialité | conditions générales de services | plan du site
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;