import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./RangeDetail.css"

const rangeData = [
    {
        id: 1,
        title: <><p>Bronze Model</p><p>1 Bedroom</p></>,
        floorplan: "./assets/range/1bedfloorplan.jpg",
        floorplanMobile: "./assets/range/1bedroomfloorplanportrait.jpg",
        details: "Australian owned and made using materials and products engineered for our unique climate. Our bronze model uses sandwedge panels and a unique engineer designed floor panel system to achieve high energy rating. The mega anchor QX-100 subfloor stumping systems means our home can be put anywhere without local govenement approval. Quick construction together with our superior design mean our bronze model is easy to build maintain and clean.",
        specifications: ["1 bedroom / 1 bathroom", "1 ensuite", "Open kitchen and living with pitched ceiling", "All appliances Solar enabled", "Verandah", "Septic tank capability", "Termite rated", "BAL rated for bushfire areas", "Cyclone rated"],
    },
    {
        id: 2,
        title: <><p>Silver Model</p><p>2-3 Bedroom</p></>,
        floorplan: "./assets/range/2bedfloorplan.jpg",
        floorplanMobile: "./assets/range/2bedroomfloorplanportrait.jpg",
        details: "Australian owned and made using materials and products engineered for our unique climate. Our silver models offer an additional 1-2 bedrooms, providing extra room and space. Equipped with all the features of our Bronze model, our Silver model goes above and beyond with a larger floor plan and overall footprint.",
        specifications: ["2-3 bedroom / 1 bathroom", "1 ensuite", "Open kitchen and living with pitched ceiling", "Ceilings are 3600mm high", "All appliances solar enabled", "Verandah", "Septic tank capability", "Termite rated", "BAL rated for bushfire areas", "Cyclone rated"],
    },
    {
        id: 3,
        title: <><p>Custom Model</p><p>Sports / Community rooms</p></>,
        floorplan: "./assets/range/footyroomsfloorplan.jpg",
        floorplanMobile: "./assets/range/footyroomsfloorplan.jpg",
        details: "Our unique modular design means our homes can be customised to suit other facilities such as sports club rooms or community rooms. The open plan facilities can span up to 19 metres in width and accommodate a number of needs and requirements.",
        specifications: ["Quick construction", "High energy rating", "Termite proof", "BAL rated for bushfire areas", "Cyclone rated"],
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