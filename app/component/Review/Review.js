import React from "react";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AutoPlay = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const review = [
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive"

        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive"

        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive"

        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive"

        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive"

        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive"

        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive"

        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive"

        },
        {
            title: "Marvyn Habibi",
            img: 'https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b40fce5ec674_SoldOut-Logo.jpg',
            description: "hey are charming, responsive"

        },
    ]
    return (
        <div className="w-full mt-7 mb-8 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Auto Play</h2>
            <Slider className="grid grid-cols-1 lg:grid-cols-10 gap-4 mt-5 mb-5" {...settings}>


                {
                    review.map(rev => <div className=''>

                        <div className="
                        flex">
                            <div>
                                <img src={rev.img} alt="" />
                            </div>
                            <div>
                                <h1>{rev.title}</h1>
                                <p>{rev.description}</p>
                            </div>
                        </div>
                    </div>
                    )
                }




            </Slider>
        </div>
    );
};

export default AutoPlay;
