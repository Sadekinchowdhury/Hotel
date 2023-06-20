import React from 'react';

const SubScription = () => {
    return (
        <div className='py-9 bg-[rgba(246,240,234,.5)]'>
            <h1 className='text-[46px] mb-[24px] font-[family] text-center font-black mt-[24px]'>Ok, but why choose <span className='text-yellow-400'>Talk ?</span></h1>


            <div className='grid grid-cols-1 m-3 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto'>
                <div className='items-center bg-white rounded-2xl m-2 p-6  text-center'>
                    <div>
                        <img className='mx-auto' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4f8f15ecb5c_camera-with-flash_1f4f8.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[19px] font-bold  mt-2 mb-2  uppercase font-[sans]'>
                            Photos $ videos
                        </h1>
                        <p className='italic font-[16px]'>
                            Shooting, redaction, publication : <strong>nos experts s'occupent de tout,</strong> à votre place.
                        </p>
                    </div>
                </div>
                <div className='items-center bg-white rounded-2xl m-2 p-6    text-center'>
                    <div>
                        <img className='mx-auto' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b41c255ecb60_stopwatch_23f1-fe0f.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[19px] font-bold  mt-2 mb-2  uppercase font-[sans]'>
                            Save Time
                        </h1>
                        <p className='italic font-[16px]'>
                            Delegate the management of your social networks, <strong>focus on your activity.</strong>

                        </p>
                    </div>
                </div>
                <div className='items-center bg-white rounded-2xl m-2 p-6    text-center'>
                    <div>
                        <img className='mx-auto' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b495075ecb5b_direct-hit_1f3af.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[19px] font-bold  mt-2 mb-2  uppercase font-[sans]'>
                            REACH YOUR CUSTOMERS
                        </h1>
                        <p className='italic font-[16px]'>
                            100% of the people affected <strong>correspond to your</strong> customers around your establishment.
                        </p>
                    </div>
                </div>
                <div className='flex border-[4px] border-dashed   rounded-2xl m-2 p-6 items-center border-[#ffcd00]   justify-center '>

                    <div className='text-center mt-6 mb-6'>
                        <h1 className='text-[19px] font-bold uppercase font-[sans]'>Accesible</h1>
                        <strong className='font-[sans] text-[15px'>From</strong>

                        <div className='flex'>
                            <div>
                                <h1 className='text-7xl font-bold font-[family]'>249</h1>

                            </div>
                            <div>
                                <span className='text-xl font-bold'> <span className='mr-2 font-[20px]'>€</span> <span className='text-sm'>ex </span></span> <span className='text-[16px] font-bold'> VAT</span>
                                <p className='text-[16px] font-bold'>/month</p>
                            </div>
                        </div>




                    </div>
                </div>

            </div>

            <div className='flex justify-center   py-10 items-center'>
                <div className='text-center'>
                    <button className="bg-[#ffcd00]    font-semibold px-6 py-3 rounded text-black">
                        Let's Go
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubScription;