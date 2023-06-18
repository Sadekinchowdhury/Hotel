import React from 'react';


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
                <div className="">
                    <ul className='flex transition-transform ease-in-out duration-1000  transform hover:-translate-x-full'>
                        <li>
                            <img src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b44d1d5ecb8a_SOLD%20OUT.png" alt="" />
                        </li>

                        <li>
                            <img src=" https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b462d35ecb84_ERNEST.png" alt="" />
                        </li>
                        <li>
                            <img src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4fa095ecb7d_CAREFFOUR.png" alt="" />
                        </li>
                        <li>
                            <img src="  https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b44f065ecb59_AU%20BUREAU.png" alt="" />
                        </li>
                        <li>
                            <img src=" https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b44f065ecb59_AU%20BUREAU.png" alt="" />
                        </li>
                        <li>
                            <img src=" https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b440b65ecb89_IMA.png" alt="" />
                        </li>

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Brand;