import React from 'react';
import "./Home.css"
import CustomSlider from './components/CustomSlider';

function Home() {

    return (
        <div className="home-container">


            <div className="slider-container">
                <CustomSlider />

            </div>
            <div className="tag-line"><p>100% Australian made and owned</p><p>See what we do differently...</p></div>
        </div>
    )
}

export default Home;