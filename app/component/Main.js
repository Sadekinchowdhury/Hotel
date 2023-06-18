import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Navbar/Footer/Footer';
import Video from './Video';
import Brand from './Brand';
import SubScription from './SubScription';
import Customar from './Customar';
import PhotoShop from './PhotoShop';
import GoogleReview from './GoogleReview';
import Form from './Form';

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Video />
            <Brand />
            <SubScription />
            <Customar />
            <PhotoShop />
            <GoogleReview />
            <Form />
            <Footer></Footer>
        </div>
    );
};

export default Main;