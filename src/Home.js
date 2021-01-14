import React, { useEffect } from 'react';
import "./Home.css"
import CustomSlider from './components/CustomSlider';

function Home() {
    useEffect(() => {
        //preloading image
        const imagesArray = [
            { name: "../assets/images/pic1new.png" },
            { name: "../assets/images/pic2new.png" },
            { name: "../assets/images/pic6new.png" },
            { name: "../assets/images/bathroom.png" },
            { name: "../assets/images/kitchen.png" },
            { name: "../assets/images/living.png" },
            { name: "../assets/images/bedroom.png" }
        ]
        imagesArray.forEach((image) => {
            const img = new Image();
            img.src = image.name;
        });
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