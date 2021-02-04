import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import "./ProjectSlider.css"


export default class ProjectSlider extends Component {

    render() {

        const settings = {
            autoplay: this.props.autoplay,
            dots: true,
            dotsColor: "white",
            duration: 100,
            pauseOnHover: false,
            autoplaySpeed: 5000

        };
        return (
            <div className="project-slider">
                <Slider {...settings} >

                    {this.props.images.map((imageName, index) => (
                        <div key={index} className="project-slider-image">
                            <img className="project-slider-image" src={imageName} alt="pic1.png" />
                        </div>
                    ))}

                </Slider>



            </div>
        );
    }
}