import React from "react";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BardLarge = () => {
    const settings = {

        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,

        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const review = [
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4b2045ecb98_SCHMIDT.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4a1365ecb85_SAMARITAINE.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4353b5ecb7c_PRIVATEASER.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b43e205ecb81_KIABI.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4b2045ecb98_SCHMIDT.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4a1365ecb85_SAMARITAINE.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4353b5ecb7c_PRIVATEASER.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b43e205ecb81_KIABI.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4b2045ecb98_SCHMIDT.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4a1365ecb85_SAMARITAINE.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b4353b5ecb7c_PRIVATEASER.png" },
        { img: "https://uploads-ssl.webflow.com/6449bec445e2b41c675ec13d/6449bec445e2b43e205ecb81_KIABI.png" },
    ]
    return (
        <div className="w-full  mx-auto">

            <Slider className="" {...settings}>


                {
                    review.map(rev => <div className='flex-col-1 gap-10  '>

                        <ul>
                            <li>
                                <img className="max-32 h-32" src={rev.img} alt="" />
                            </li>
                        </ul>
                    </div>
                    )
                }




            </Slider>
        </div>
    );
};

export default BardLarge;
