// // import React, { useRef } from "react";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Slider from "react-slick";
// // import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// // const CardSlider = () => {
// //     const sliderRef = useRef(null);

// //     const settings = {
// //         dots: true,

// //         infinite: true,
// //         slidesToShow: 3,
// //         slidesToScroll: 1,
// //     };

// //     const goToPrev = () => {
// //         sliderRef.current.slickPrev();
// //     };

// //     const goToNext = () => {
// //         sliderRef.current.slickNext();
// //     };

// //     const cards = [
// //         {
// //             title: "Marvyn Habibi",
// //             img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
// //             description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"
// //         },
// //         {
// //             title: "Marvyn Habibi",
// //             img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
// //             description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"
// //         },
// //         {
// //             title: "Marvyn Habibi",
// //             img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
// //             description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"
// //         },
// //         {
// //             title: "Marvyn Habibi",
// //             img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
// //             description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"
// //         },
// //     ];

// //     return (
// //         <div className="w-full mt-7 mb-8 mx-auto">
// //             <Slider ref={sliderRef} {...settings}>
// //                 {cards.map((card, index) => (
// //                     <div key={index} className="flex justify-center">
// //                         {/* Card component */}
// //                         <div className="w-64 bg-white shadow-md rounded-md p-4">
// //                             {/* Card content */}
// //                             <h1 className="text-lg font-semibold">{card.title}</h1>
// //                             <p className="text-gray-500">{card.description}</p>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </Slider>

// //             {/* Slider navigation buttons */}
// //             <div className="flex justify-center mt-4">


// //                 <button
// //                     className="mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
// //                     onClick={goToPrev}
// //                 >
// //                     <FiChevronLeft className="w-6 h-6" />
// //                 </button>
// //                 <button
// //                     className="text-gray-500 hover:text-gray-700 focus:outline-none"
// //                     onClick={goToNext}
// //                 >
// //                     <FiChevronRight className="w-6 h-6" />
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default CardSlider;


// import React, { useRef } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import Link from "next/link";

// const CardSlider = () => {
//     const sliderRef = useRef(null);

//     const settings = {
//         dots: true,

//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//     };

//     const goToPrev = () => {
//         sliderRef.current.slickPrev();
//     };

//     const goToNext = () => {
//         sliderRef.current.slickNext();
//     };

//     const cards = [
//         {
//             title: "Hospitality: Top 8 trends 2023",
//             img: 'https://uploads-ssl.webflow.com/6449bec445e2b466305ec165/646b642f8fb7b11360e233cd_3X7A6374-min.webp',
//             description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"
//         },
//         {
//             title: "Marvyn Habibi",
//             img: 'https://uploads-ssl.webflow.com/6449bec445e2b466305ec165/6470c7e4d3b6b46a21e87d84_2_AVRIL23_BOCCA_NISSA-13%20(1)-min.webp',
//             description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"
//         },
//         {
//             title: "Marvyn Habibi",
//             img: 'https://uploads-ssl.webflow.com/6449bec445e2b466305ec165/6480beaa822d6be6ac109994_GettyImages-1363872220-min.webp',
//             description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"
//         },
//         {
//             title: "Marvyn Habibi",
//             img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
//             description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"
//         },
//     ];

//     return (
//         <div className="w-full mt-7  mx-auto">
//             <Slider ref={sliderRef} {...settings}>
//                 {cards.map((card, index) => (
//                     <div key={index} className="flex justify-center">
//                         {/* Card component */}
//                         <div className="w-full h-64 bg-white shadow-md rounded-md p-4">
//                             <div>
//                                 <img className="w-full h-64 rounded-2xl" src={card.img} alt="" />
//                             </div>
//                             {/* Card content */}
//                             <h1 className="text-2xl mt-6 mb-6 font-semibold">{card.title}</h1>
//                             <Link href='' className='text-yellow-300 text-xl font-semibold'>Learn More</Link>

//                         </div>
//                     </div>
//                 ))}
//             </Slider>

//             {/* Slider navigation buttons */}
//             <div className="flex justify-center mt-4">


//                 <button
//                     className="mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
//                     onClick={goToPrev}
//                 >
//                     <FiChevronLeft className="w-6 h-6" />
//                 </button>
//                 <button
//                     className="text-gray-500 hover:text-gray-700 focus:outline-none"
//                     onClick={goToNext}
//                 >
//                     <FiChevronRight className="w-6 h-6" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CardSlider;
import React, { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const CardSlider = () => {
    const sliderRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div style={{ bottom: "0", left: "-45%", position: "absolute", marginTop: "100px" }}>
                <ul>{dots}</ul>
            </div>
        ),
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const cards = [
        {
            title: "Hospitality: Top 8 trends 2023",
            img:
                "https://uploads-ssl.webflow.com/6449bec445e2b466305ec165/646b642f8fb7b11360e233cd_3X7A6374-min.webp",
            description:
                "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive",
        },
        {
            title: "Marvyn Habibi",
            img:
                "https://uploads-ssl.webflow.com/6449bec445e2b466305ec165/6470c7e4d3b6b46a21e87d84_2_AVRIL23_BOCCA_NISSA-13%20(1)-min.webp",
            description:
                "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive",
        },
        {
            title: "Marvyn Habibi",
            img:
                "https://uploads-ssl.webflow.com/6449bec445e2b466305ec165/6480beaa822d6be6ac109994_GettyImages-1363872220-min.webp",
            description:
                "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive",
        },
        {
            title: "Marvyn Habibi",
            img:
                "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg",
            description:
                "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive",
        },
    ];

    return (
        <div className="w-full mt-7 py-10 relative  mx-auto">

            <h1 className="text-6xl  mb-7 font-bold text-center">Discover our articles</h1>

            <Slider ref={sliderRef} {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="flex justify-center">
                        {/* Card component */}
                        <div className="w-full h-auto mb-10 bg-white  rounded-md p-4">
                            <div>
                                <img
                                    className="w-full h-64 rounded-2xl"
                                    src={card.img}
                                    alt=""
                                />
                            </div>
                            {/* Card content */}
                            <h1 className="text-2xl mt-6 mb-6 font-semibold">{card.title}</h1>
                            <Link href="" className="text-yellow-300 text-xl font-semibold">
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Slider navigation buttons */}
            <div className="flex absolute bottom-0 right-4 justify-center mt-4">
                <button
                    className="mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={goToPrev}
                >
                    <FiChevronLeft className="w-6 h-6" />
                </button>
                <button
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={goToNext}
                >
                    <FiChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default CardSlider;
