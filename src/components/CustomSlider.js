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
                        <img className="slider-image" src="../assets/pic1new.png" alt="pic1.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/pic2new.png" alt="pic2.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/pic6new.png" alt="pic6.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/bathroom.png" alt="bathroom.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/kitchen.png" alt="kitchen.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/living.png" alt="living.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/bedroom.png" alt="bedroom.png" />
                    </div>
                </Slider>



            </div>
        );
    }
}