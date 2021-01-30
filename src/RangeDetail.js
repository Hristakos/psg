import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./RangeDetail.css"

const rangeData = [
    {
        id: 1,
        title: "Bronze Model",
        floorplan: "./assets/range/1bedfloorplan.jpg",
        floorplanMobile: "./assets/range/1bedroomfloorplanportrait.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Tellus orci ac auctor augue mauris augue neque gravida in.Placerat vestibulum lectus mauris ultrices eros in.Auctor eu augue ut lectus arcu.Senectus et netus et malesuada.",
        specifications: ["3 bedroom / 1 bathroom", "1 ensuite", "Open kitchen and living with pitched ceiling", "9ft ceilings", "All appliances Solar enabled", "Verandah"],
    },
    {
        id: 2,
        title: "Silver Model",
        floorplan: "./assets/range/2bedfloorplan.jpg",
        floorplanMobile: "./assets/range/2bedroomfloorplanportrait.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Tellus orci ac auctor augue mauris augue neque gravida in.Placerat vestibulum lectus mauris ultrices eros in.Auctor eu augue ut lectus arcu.Senectus et netus et malesuada.",
        specifications: ["3 bedroom / 1 bathroom", "1 ensuite", "Open kitchen and living with pitched ceiling", "9ft ceilings", "All appliances Solar enabled", "Verandah"],
    },
    {
        id: 3,
        title: "Change rooms",
        floorplan: "./assets/range/footyroomsfloorplan.jpg",
        floorplanMobile: "./assets/range/footyroomsfloorplan.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Tellus orci ac auctor augue mauris augue neque gravida in.Placerat vestibulum lectus mauris ultrices eros in.Auctor eu augue ut lectus arcu.Senectus et netus et malesuada.",
        specifications: ["3 bedroom / 1 bathroom", "1 ensuite", "Open kitchen and living with pitched ceiling", "9ft ceilings", "All appliances Solar enabled", "Verandah"],
    },
    {
        id: 4,
        title: "Diamond Model",
        floorplan: "./assets/range/floorplan.svg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Tellus orci ac auctor augue mauris augue neque gravida in.Placerat vestibulum lectus mauris ultrices eros in.Auctor eu augue ut lectus arcu.Senectus et netus et malesuada.",
        specifications: ["3 bedroom / 1 bathroom", "1 ensuite", "Open kitchen and living with pitched ceiling", "9ft ceilings", "All appliances Solar enabled", "Verandah"],
    },


]



const RangeDetailView = ({ rangeData }) => {
    // const [device, setDevice] = useState(!!navigator.maxTouchPoints ? 'mobile' : 'computer')
    // const [orientation, setOrientation] = useState(!navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape')
    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: true });

        // window.detectListener = window.addEventListener("resize", detect);
    }, []);

    // const detect = () => {

    //     setDevice(!!navigator.maxTouchPoints ? 'mobile' : 'computer')
    //     setOrientation(!navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape');
    // }

    return (

        <div className="range-detail-view-container" >
            <div className="range-detail-view-flex">
                <div className="range-detail-view-floorplan">
                    <div className="range-detail-view-floorplan-heading">
                        floorplan
                    </div>
                    <div className="range-detail-view-floorplan-image">
                        <img src={rangeData.floorplan} />
                    </div>

                </div>
                <div className="range-detail-view-detail">
                    <div className="range-detail-view-detail-heading">
                        the details
                    </div>
                    <div className="range-detail-view-detail-content">
                        {rangeData.details}
                    </div>
                </div>
                <div className="range-detail-view-specifications">
                    <div className="range-detail-view-specifications-heading">
                        the specifications
                    </div>
                    <div className="range-detail-view-specifications-content">
                        {rangeData.specifications.map((spec, index) => (<li key={index}>{spec}</li>))}

                    </div>
                    <div className="enquire-link-container">

                        <div className="enquire-link">
                            <a style={{ width: "100%", textAlign: "center" }} href="/#contact">Enquire Now</a>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )

}

function RangeDetail({ location }) {
    const [rangeId, setRangeId] = useState(location.search.split("").pop());

    return (

        <div className="range-detail-container">
            <div className="range-detail-page-heading"> {rangeData[rangeId - 1].title}</div>
            <RangeDetailView
                rangeData={rangeData[rangeId - 1]} />
        </div>
    )
}

export default RangeDetail;