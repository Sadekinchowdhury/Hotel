"use-client"

import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';


import { useState } from 'react';
const FormSection = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    };

    return (
        <div className="flex lg:p-10 mb-6 mt-3 p-2 bg-[#ffcd00]">
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                {/* Text Section */}
                <div className="w-auto h-auto">
                    <div className='w-9/12 mx-auto'>
                        <h1 style={{
                            fontFamily: "rumel"
                        }} className="text-[44px] font-medium  mt-5 mb-6  ">You have questions, we have <span className='text-white'>the answers</span>.</h1>
                        <p className="mt-4 text-[18px]">Need advice, to be accompanied or to know more about what we do, do not hesitate, contact us!</p>

                        <ul className='mt-4'>
                            <div className='flex gap-3 text-xl font-semibold items-center '>
                                <div className='border-b-gray-900 bg-white  border-2 mt-3 border-black  rounded-full'>
                                    <img className='' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b438b65ec22d_check.svg" alt="" />
                                </div>
                                <div>
                                    <p className='mt-4 font-[18px]'>Attract new customar</p>
                                </div>
                            </div>
                            <div className='flex gap-3 text-xl font-semibold items-center '>
                                <div className='border-b-gray-900 bg-white  border-2 mt-3 border-black  rounded-full'>
                                    <img className='' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b438b65ec22d_check.svg" alt="" />
                                </div>
                                <div>
                                    <p className='mt-4 font-[18px]'> Increes your tournover </p>
                                </div>
                            </div>
                            <div className='flex gap-3 text-xl font-semibold items-center '>
                                <div className='border-b-gray-900 bg-white  border-2 mt-3 border-black  rounded-full'>
                                    <img className='' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b438b65ec22d_check.svg" alt="" />
                                </div>
                                <div>
                                    <p className='mt-4 font-[18px]'>Be active on social network</p>
                                </div>
                            </div>


                        </ul>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full bg-white rounded-3xl m-3 mx-auto p-6">
                    <form>
                        <div className="mb-4">
                            <input type="text" placeholder='Forename*' id="name" className="w-full rounded-[5px] px-3 py-3 border border-gray-200 " />
                        </div>
                        <div className="mb-4">
                            <input type="text" placeholder='Company Name*' id="name" className="w-full rounded-[5px] px-3 py-3 border border-gray-200 " />
                        </div>
                        <div className="mb-4">
                            <input type="text" placeholder='Email' id="name" className="w-full rounded-[5px] px-3 py-3 border border-gray-200 " />
                        </div>

                        <div>

                            <div className='mt-2 mb-3 w-full'>
                                <PhoneInput
                                    country={'bd'}
                                    containerStyle={{ width: '100%', height: '50px' }}
                                    inputStyle={{ width: '100%', height: '100%' }}

                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className="bg-[#ffcd00] w-full shadow-2xl border-[1px] font-semibold px-10 mb-5 py-3 rounded text-black">
                                Discover the strategy
                            </button>
                        </div>

                        <div className='mt-4 mb-4'>
                            <p>By clicking on "Discover the strategy" you acknowledge that you have read and accept the General Terms and Conditions as well as the Privacy </p>
                        </div>
                    </form>
                </div >
            </div>
        </div >
    );
};

export default FormSection;
