import React from 'react';
import Brands from './Brands/Brands';
import BardLarge from './Brands/BrandLarsSreen';


const Brand = () => {

    return (
        <div className='bg-[#ffcd00] py-6'>
            <div className='pt-8 mb-4'>
                <h1 className='text-[16px]  text-center uppercase font-semibold font-gentle'>EveryWher in Frans <span className='text-sm'>FR</span></h1>
                <h1 style={{
                    fontFamily: "rumel"
                }} className='text-center text-[#222525] text-[38px] font-medium'>+then 800 merchatns trust us</h1>
            </div>

            {/* <div className='relative'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVoNt1cV69HL0jw7TNV1P4du6KUjgaD9hqg&usqp=CAU"
                    alt="Your Image"
                    className="absolute right-0 animate-slide-left"
                />
            </div> */}
            <div>
                <div className='md:hidden block'>
                    <Brands />
                </div>
                <div className='hidden md:block'>
                    <BardLarge />
                </div>
            </div>

        </div>
    );
};

export default Brand;