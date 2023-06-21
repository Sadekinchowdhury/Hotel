import React from 'react';
import styles from './Google.module.css'

import ImageSlider from './Review/Review';
import AutoPlay from './Review/Review';
import AutoPlayer from './Review/AutoPlayer';
const GoogleReview = () => {

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
        <div className='mt-10 relative bg-[#ffcd00] py-3'>
            <div>
                <h1 style={{
                    fontFamily: "rumel"
                }} className=' text-4xl font-medium mt-6  text-center'>Join Our 800 customar</h1>
            </div>


            <AutoPlay />
            <AutoPlayer />

            <div className='flex items-center justify-center'>
                <button className="bg-white shadow-2xl border-[1px] font-semibold px-14 mb-5 py-3 rounded text-black
                transition-all cursor-pointer duration-200  hover:scale-100  hover:shadow-2xl hover:rotate-3 
                
                ">
                    Read Google Review
                </button>
            </div>
        </div>
    );
};

export default GoogleReview;