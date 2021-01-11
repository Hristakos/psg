import React from 'react';
import "./OurRange.css"
const Range = ({ title, price, image = "./tools.svg", detail, link }) => {
    return (
        <div className="range-container">
            <div className="range-title"> {title}</div>
            <div className="range-outline">
                <div className="range-price">{price}</div>
                <div className="range-image-container">
                    <img src={image}></img>
                </div>
                <div className="range-detail">{detail}</div>
                <div className="range-link"><a href={link}><span className="range-link-text"><p>Tell me more</p> <img src="./rangearrow.svg" /></span></a></div>

            </div>
        </div>
    )

}

function OurRange() {
    return (
        <>
            <div className="range-page-heading">Explore the range</div>
            <div className="range-page-container">

                <div className="range-wrapper">
                    <Range
                        title="Bronze Model"
                        price="$99,000"
                        image="./permits.png"
                        detail="1 bedroom / 1 bathroom Open kitchen and living 9 ft ceilings All appliances Fitted to run off electricity grid and sewerage network or septic tank"

                    />
                    <Range
                        title="Silver Model"
                        price="$180,000"
                        image="./noplaster.png"
                        detail="2 bedrooms / 1 bathroom Open kitchen and living with pitched ceiling All appliances Fitted to run off electricity grid and sewerage network or septic tank Verandah"

                    />
                </div>
                <div className="range-wrapper">
                    <Range
                        title="Gold Model"
                        price="$199,000"
                        image="./design.png"
                        detail="3 bedrooms / 1 bathroom Open kitchen and living with pitched ceiling 9ft ceilings All appliances Solar enabled Verandah"

                    />
                    <Range
                        title="Diamond Model"
                        price="$250,000"
                        image="./design.png"
                        detail="3 bedroom / 1 bathroom 1 ensuite Open kitchen and living with pitched ceiling 9ft ceilings All appliances Solar enabled Verandah"

                    />
                </div>
            </div>
        </>
    )
}

export default OurRange;