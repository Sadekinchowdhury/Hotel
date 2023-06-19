import React from 'react';
import styles from './Google.module.css'

import ImageSlider from './Review/Review';
import AutoPlay from './Review/Review';
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
        <div className='mt-10 py-3'>
            <div>
                <h1 className=' text-4xl font-bold text-center'>Join Our 800 customar</h1>
            </div>

            {/* <div className={`${styles.container}`}>
                <div className={`${styles.card} grid grid-cols-1 lg:grid-cols-10 gap-10 mt-5 mb-5 `}>
                    {
                        review.map(rev => <div className=''>

                            <div>
                                <img src={rev.img} alt="" />
                            </div>
                            <div>
                                <h1>{rev.title}</h1>
                                <p>{rev.description}</p>
                            </div>
                        </div>
                        )
                    }

                </div>

            </div> */}
            <AutoPlay />

            <div className='flex items-center justify-center'>
                <button className="bg-white shadow-2xl border-[1px] font-semibold px-14 py-4 rounded text-black">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default GoogleReview;