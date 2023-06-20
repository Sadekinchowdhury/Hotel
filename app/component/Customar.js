import React from 'react';
import ReactPlayer from 'react-player';

const Customar = () => {
    return (
        <div className='bg-yellow-400 '>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:p-10 p-3 mx-auto m-3'>
                <div className='flex items-center  justify-center text-center py-10'>
                    <div>
                        <h1 className='text-5xl py-10 font-sans font-bold '>
                            Our customers talk <br /> about it better than <br /> we do
                        </h1>
                        <p className='text-xl font-normal'>
                            "It is a solution very adapted to traders in a sense that our <br /> job takes us a lot of time and if tomorrow we had to <br /> provide the same work   we would lose all this time in <br /> production"

                            <p className='py-6'>
                                See how <strong>Nathan Helo, Dupin's</strong> boss, <strong>boosted his social media </strong> with Talk
                            </p>
                        </p>
                        <div className='text-center'>
                            <button className="bg-white shadow-2xl  font-semibold px-14 py-4 rounded text-black">
                                Join The Family
                            </button>
                        </div>
                    </div>
                </div>
                <div className='p-6 w-full  h-auto lg:w-10/12 mx-auto mb-6 mt-6  bg-white rounded-3xl m-2'>
                    <div>
                        <div className='flex gap-3 py-5 items-center'>
                            <h1 className='text-xl font-medium'>Dupin</h1>
                            <div className=''>

                                <h1 className=''>Nathan</h1>

                                <p>@dupin_restaurant</p>
                            </div>
                        </div>

                        <div className="w-full h-[400px]">

                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=eEr56MfFP6I"
                                playing
                                loop
                                onPlay={true}
                                muted
                                width={"100%"}
                                height={"100%"}


                            />

                        </div>

                        <div className='flex justify-between mx-auto p-3'>
                            <div>
                                <ul className='flex gap-2'>
                                    <li>
                                        <img className='w-10 h-10' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b43e045ec580_Heart.svg" alt="" />
                                    </li>
                                    <li>
                                        <img className='w-10 h-10' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b47f2e5ec53a_Comment.svg" alt="" />
                                    </li>
                                    <li>
                                        <img className='w-10 h-10' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4909a5ec587_Share.svg" alt="" />
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img className='w-10 h-10' src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b485145ec586_Bookmark.svg" alt="" />
                            </div>
                        </div>
                        <div>
                            <h1>449 <strong>Likes</strong></h1>
                            <p>437 Likes
                                dupin_restaurant "Talk in 3 words? I would say simple, quality, proximity and conscientious"
                                <span className='text-[#3ea9e5]'>#MerciTalk #Satisfait</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customar;