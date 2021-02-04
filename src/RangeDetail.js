import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./RangeDetail.css"

const rangeData = [
    {
        id: 1,
        title: "Bronze Model",
        floorplan: "./assets/range/1bedfloorplan.jpg",
        floorplanMobile: "./assets/range/1bedroomfloorplanportrait.jpg",
        details: "Australian Owned and made using Australian materials & products. Highly efficient rated unit built with sandwedge panels to obtain a high energy star rating, unique engineered designed floor panel system. Mega anchor- QX - 100 Anchors subfloor stumping system. Low maintenance, easy to maintain and clean. Can be septic sewer fitted. Termite Rated. Bal rated bush fire areas. Cyclone rated. Quick easy construction with limited trades required.",
        specifications: ["1 bedroom / 1 bathroom", "1 ensuite", "Open kitchen and living with pitched ceiling", "9ft ceilings", "All appliances Solar enabled", "Verandah"],
    },
    {
        id: 2,
        title: "Silver Model only 2 to 3 bedroom",
        floorplan: "./assets/range/2bedfloorplan.jpg",
        floorplanMobile: "./assets/range/2bedroomfloorplanportrait.jpg",
        details: "Australian Owned and made using Australian materials & products. Highly efficient rated unit built with sandwedge panels to obtain a high energy star rating, unique engineered designed floor panel system. Mega anchor- QX - 100 Anchors subfloor stumping system. Low maintenance, easy to maintain and clean. Can be septic sewer fitted. Termite Rated. Bal rated bush fire areas. Cyclone rated. Quick easy construction with limited trades required.",
        specifications: ["2-3 bedroom / 1 bathroom", "1 ensuite", "Open kitchen and living with pitched ceiling", "Ceilings are 3600mm high", "All appliances Solar enabled", "Verandah"],
    },
    {
        id: 3,
        title: "Sports rooms - customed faculties - community rooms",
        floorplan: "./assets/range/footyroomsfloorplan.jpg",
        floorplanMobile: "./assets/range/footyroomsfloorplan.jpg",
        details: "Open plan with large single spans up to 19m widths. Made to the clients requirements and expectations. Internal fit outs designed to suit the needs and requirements.",
        specifications: ["Mega Anchor -QX-100 Anchors to sub floor", "Quick Construction", "High energy rated", "Termite proof", "Bal rated bush fire areas", "Cyclone rated"],
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