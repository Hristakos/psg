import React from 'react';
import "./Home.css"
import CustomSlider from './components/CustomSlider';

function Home() {

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