import React from 'react';
import Brands from './Brands/Brands';


const Brand = () => {

    return (
        <div className='bg-[#ffcd00]'>
            <div className='py-6'>
                <h1 className='text-[16px]  text-center uppercase font-semibold font-sans'>EveryWher in Frans <span className='text-sm'>FR</span></h1>
                <h1 className='text-center text-[33px] font-extrabold'>+then 800 merchatns trust us</h1>
            </div>

            {/* <div className='relative'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVoNt1cV69HL0jw7TNV1P4du6KUjgaD9hqg&usqp=CAU"
                    alt="Your Image"
                    className="absolute right-0 animate-slide-left"
                />
            </div> */}
            <div>
                <Brands />

            </div>

        </div>
    );
};

export default Brand;