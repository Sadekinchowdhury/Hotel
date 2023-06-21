import React from 'react';

const PhotoShop = () => {
    return (
        <div>
            <div className=''>
                <h1 style={{
                    fontFamily: "rumel"
                }} className='lg:text-[52px] text-3xl my-10 font-medium text-center'>
                    4 professions, one offer
                </h1>
                <div style={{
                    fontFamily: "rumel"
                }} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 items-center gap-6 m-2  text-center mb-8  text-[21px]  mx-auto'>

                    <div className='text-2xl py-4 px-6 rounded-2xl shadow-2xl bg-gray-100'>
                        <p> 1. Photo shoot</p>
                    </div>
                    <div className='text-2xl py-4 px-6 rounded-2xl bg-gray-100  text-gray-500 '>
                        <p>2.Publications</p>
                    </div>
                    <div className='text-2xl py-4 px-6 rounded-2xl bg-gray-100  text-gray-500 '>
                        3.Sponsorship
                    </div>
                    <div className='text-2xl py-4 px-6 rounded-2xl bg-gray-100  text-gray-500 '>4.Performance</div>

                </div>
            </div>

            <div className='grid grid-cols-1 mt-10 lg:grid-cols-2 w-11/12 mx-auto shadow-2xl border-[1px] rounded-3xl gap-6'>
                <div className=''>
                    <img className='rounded-[35px]' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b433125ec5d0_Shooting%20Photo.jpg" alt="" />
                </div>
                <div className='py-10 px-3 w-11/12 mx-auto'>
                    <div className='mb-6 mt-6'>
                        <p style={{
                            fontFamily: "rumel"
                        }} className='text-4xl font-normal'>
                            Professional creators
                        </p>
                    </div>
                    <p className='text-[18px] font-normal mb-6'>
                        Beautiful photos and videos catch the eye, but especially your future customers. Our professional photographers and videographers highlight your establishment.
                    </p>
                    <div className=''>
                        <button className="bg-[#ffcd00]    font-semibold px-8 py-3 transition-all cursor-pointer duration-200 hover:bg-yellow-300 hover:scale-100 hover:text-gray-400 hover:shadow-2xl hover:-rotate-3  rounded text-black">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoShop;