import React, { useEffect } from 'react';
import "./Home.css"
import CustomSlider from './components/CustomSlider';

function Home() {
    useEffect(() => {
        //preloading image
        // faceArray.forEach((face) => {
        const img = new Image();
        img.src = "../assets/images/pic1new.png";
        // });
    }, []);
    return (
        <div className="home-container">


            <div className="slider-container">
                <CustomSlider />

            </div>
            <div className="tag-line">See what we do differently...</div>
        </div>
    )
}

export default Home;