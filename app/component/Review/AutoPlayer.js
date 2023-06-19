import React from "react";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AutoPlayer = () => {
    const settings = {

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    const review = [
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"


        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"


        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"


        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"


        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"


        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"


        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"


        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive hey are charming, responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive responsive hey are charming, responsive hey are charming, responsivehey are charming, responsive"


        }

    ]
    return (
        <div className="w-full  mx-auto">

            <Slider className="" {...settings}>


                {
                    review.map(rev => <div className='flex-col-1 gap-6 p-5  mb-5'>

                        <div className="flex shadow-2xl bg-white rounded-3xl justify-center p-3  items-center gap-5">
                            <div className="w-1/2">
                                <img className="w-[50px] rounded-full h-[50px]" src={rev.img} alt="" />
                            </div>
                            <div className="mx-auto ">
                                <h1 className="text-[14px]  font-semibold flex">{rev.title} <span  > <img className="w-[100px] ml-3" src="https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b477425ec822_Star.svg" alt="" />
                                </span> </h1>
                                <p className="text-sm">{rev.description}</p>
                            </div>
                        </div>
                    </div>
                    )
                }




            </Slider>
        </div>
    );
};

export default AutoPlayer;
