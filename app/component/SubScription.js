import React from 'react';

const SubScription = () => {
    return (
        <div className='py-10'>
            <h1 className='text-[46px] mb-[24px] text-center font-bold mt-[24px]'>Ok, mais pourquoi choisir <span className='text-yellow-400'>Talk ?</span></h1>


            <div className='grid grid-cols-1 m-3 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto'>
                <div className='items-center bg-white rounded-2xl m-2 p-6 shadow-2xl   text-center'>
                    <div>
                        <img className='mx-auto' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4f8f15ecb5c_camera-with-flash_1f4f8.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl mt-2 mb-2 font-bold'>
                            Photos $ videos
                        </h1>
                        <p>
                            Shooting, redaction, publication : <strong>nos experts s'occupent de tout,</strong> à votre place.
                        </p>
                    </div>
                </div>
                <div className='items-center bg-white rounded-2xl m-2 p-6 shadow-2xl  text-center'>
                    <div>
                        <img className='mx-auto' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b41c255ecb60_stopwatch_23f1-fe0f.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl mt-2 mb-2 font-bold'>
                            Time
                        </h1>
                        <p>
                            Delegate the management of your social networks, <strong>focus on your activity.</strong>

                        </p>
                    </div>
                </div>
                <div className='items-center bg-white rounded-2xl m-2 p-6 shadow-2xl  text-center'>
                    <div>
                        <img className='mx-auto' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b495075ecb5b_direct-hit_1f3af.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl mt-2 mb-2 font-bold'>
                            REACH YOUR CUSTOMERS
                        </h1>
                        <p>
                            100% of the people affected <strong>correspond to your</strong> customers around your establishment.
                        </p>
                    </div>
                </div>
                <div className='flex border-2 border-dashed   rounded-2xl m-2 p-6 items-center border-[#ffcd00]   justify-center '>

                    <div className='text-center mt-6 mb-6'>
                        <h1 className='text-xl font-extrabold'>Accesible</h1>
                        <strong>From</strong>

                        <div className='flex'>
                            <div>
                                <h1 className='text-6xl font-bold'>249</h1>
                            </div>
                            <div>
                                <span className='text-xl font-bold'> € Ht</span>
                                <p className='text-xl font-bold'>month</p>
                            </div>
                        </div>




                    </div>
                </div>

            </div>

            <div className='flex justify-center   py-10 items-center'>
                <div className='text-center'>
                    <button className="bg-[#ffcd00]    font-semibold px-14 py-4 rounded text-black">
                        Let's Go
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubScription;