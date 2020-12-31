import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import "./CustomSlider.css"
export default class CustomSlider extends Component {
    render() {
        const settings = {
            autoplay: true,
            dots: true,
            dotsColor: "white",
            duration: 200,
            pauseOnHover: false,
        };
        return (
            <div className="slider">
                <Slider {...settings} >
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/pic1.png" alt="pic1.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/pic2.png" alt="pic2.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/pic6.png" alt="pic6.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/pic7.png" alt="pic7.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/pic8.png" alt="pic8.png" />
                    </div>
                </Slider>
            </div>
        );
    }
}