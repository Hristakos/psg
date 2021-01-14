import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import "./CustomSlider.css"

import im1 from './assets/images/pic1new.png'
import im2 from './assets/images/pic2new.png'
import im3 from './assets/images/pic6new.png'
import im4 from './assets/images/bathroom.png'
import im5 from './assets/images/kitchen.png'
import im6 from './assets/images/living.png'
import im7 from './assets/images/bedroom.png'

// useEffect(() => {
//   //preloading image
//   const imagesArray = [
//     // { name: "../assets/images/pic1new.png" },
//     // { name: "../assets/images/pic2new.png" },
//     // { name: "../assets/images/pic6new.png" },
//     // { name: "../assets/images/bathroom.png" },
//     // { name: "../assets/images/kitchen.png" },
//     // { name: "../assets/images/living.png" },
//     // { name: "../assets/images/bedroom.png" }
//   ]
//   imagesArray.forEach((image) => {
//     const img = new Image();
//     img.src = image.name;
//   });
// }, []);
export default class CustomSlider extends Component {
    componentDidMount() {
        const imageList = [im1, im2, im3, im4, im5, im6, im7]
        imageList.forEach((image) => {
            new Image().src = image
            console.log("image = " + image)
        });
    }
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
                        <img className="slider-image" src="../assets/images/pic1new.png" alt="pic1.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/images/pic2new.png" alt="pic2.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/images/pic6new.png" alt="pic6.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/images/bathroom.png" alt="bathroom.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/images/kitchen.png" alt="kitchen.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/images/living.png" alt="living.png" />
                    </div>
                    <div className="slider-image">
                        <img className="slider-image" src="../assets/images/bedroom.png" alt="bedroom.png" />
                    </div>
                </Slider>



            </div>
        );
    }
}