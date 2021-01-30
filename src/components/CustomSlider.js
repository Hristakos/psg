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
            pauseOnHover: false
        };
        return (
            <div className="slider">
                <Slider {...settings} >

                    <div className="slider-image">
                        <img className="slider-image" src="../assets/home/pic1new.png" alt="pic1.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/home/pic2new.png" alt="pic2.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/home/pic6new.png" alt="pic6.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/home/bathroom.png" alt="bathroom.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/home/kitchen.png" alt="kitchen.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/home/living.png" alt="living.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/home/bedroom.png" alt="bedroom.png" />
                    </div>
                </Slider>



            </div>
        );
    }
}