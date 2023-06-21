// import React from 'react';
// import ReactPlayer from 'react-player';


// const Video = () => {
//     return (
//         <div className=' '>
//             <div className="">
//                 <video className="flex flex-col  relative w-full bg-red-400 justify-center items-center text-center " muted autoPlay controls>
//                     <ReactPlayer url='https://pixabay.com/videos/ocean-beach-waves-breaking-waves-160767/' />
//                 </video>


//                 <div className='absolute p-3 z-40  lg:top-1/4 lg:left-[15%]  '>
//                     <h1 className='text-[39px] font-[Playfair Display] font-bold text-white'>More <span className='text-[#ffcd00]'>Visibility</span></h1>
//                     <h1 className='text-[39px] font-[Playfair Display] font-bold text-white'>more <span className='text-[#ffcd00]'>followers</span></h1>
//                     <h1 className='text-[39px] font-[Playfair Display] font-bold text-white'>more <span className='text-[#ffcd00]'>customars</span></h1>



//                     <p className='mt-6 mb-6 font-[Roboto Mono]text-xl text-white text-[18px]'>Your future customers are on Instagram. <br />
//                         Be active where they are receptive.</p>
//                     <div className=''>
//                         <button className='bg-[#ffcd00] font-[Roboto Mono] font-semibold px-14 py-4 rounded text-black'>
//                             Contact Us
//                         </button>
//                     </div>
//                 </div>

//             </div>




//         </div >

//     );
// };

// export default Video;

import React from 'react';
import ReactPlayer from 'react-player';



const Video = () => {
    <link href="https://fonts.cdnfonts.com/css/made-gentle" rel="stylesheet" />

    return (
        <div className="flex justify-center items-center">
            <div className="relative mx-auto">
                {/* <video className="w-full  lg:h-auto h-[600px]" muted autoPlay controls>
                    <source src="https://pixabay.com/videos/ocean-beach-waves-breaking-waves-160767/" type="video/mp4" />
                   
                </video> */}
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=eEr56MfFP6I"
                    playing
                    loop
                    onPlay={true}
                    muted
                    width="1300px"
                    height="700px"
                    className=""
                />

            </div>
            <div className="absolute top-1/3 left-[15%] lg:left-1/4 transform lg:-translate-x-1/2">
                <div className=''>
                    <h1 style={{
                        fontFamily: "rumel"
                    }} className="text-3xl mt-4   lg:text-[52px] font-medium text-white">
                        More <span className="text-[#ffcd00]">Visibility</span>
                    </h1>
                    <h1 style={{
                        fontFamily: "rumel"
                    }} className="text-3xl mt-4   lg:text-[52px] font-medium text-white">
                        more <span className="text-[#ffcd00]">followers</span>
                    </h1>
                    <h1 style={{
                        fontFamily: "rumel"
                    }} className="text-3xl mt-4  lg:text-[52px] font-medium text-white">
                        more <span className="text-[#ffcd00]">customers</span>
                    </h1>
                </div>

                <p className="mt-6 mb-6 text-xl lg:text-2xl text-white">
                    Your future customers are on Instagram. <br />
                    Be active where they are receptive.
                </p>
                <div>
                    <button className="bg-[#ffcd00] transition-all cursor-pointer duration-200 hover:bg-yellow-300 hover:scale-100   hover:shadow-2xl hover:-rotate-3 font-semibold px-7 py-3 rounded text-black">
                        Contact Us
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Video;
