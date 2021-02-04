import React from 'react';
import "./OurRange.css"

import { NavLink, useHistory } from "react-router-dom";

const Range = ({ title, price, image = "./tools.svg", detail, link, id }) => {
    return (
        <div className="range-container">
            <div className="range-title"> {title}</div>
            <div className="range-outline">

                <div className="range-price">FROM  {price}</div>
                <div className="range-image-container">
                    <img src={image}></img>
                </div>
                <div className="range-detail"><ul>
                    {detail.map((feature, index) => (<li key={index}>{feature}</li>))}
                </ul></div>
                <div className="range-link-container">

                    <div className="range-link"><NavLink to={`${link}?id=${id}`} params={{ id: 1 }}><span className="range-link-text"><div>Tell me more</div> <img src="./assets/range/rangearrow.svg" /></span></NavLink></div>
                </div>

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
                        price="$149,000"
                        image="./assets/features/permits.png"
                        detail={["1 bedroom / 1 bathroom", "Open kitchen and living", "9 ft ceilings", "All appliances Fitted to run off electricity grid and sewerage", "network or septic tank"]}
                        link="/RangeDetail"
                        id={1}
                    />
                    <Range
                        title="Silver Model only 2 to 3 bedroom"
                        price="$249,000"
                        image="./assets/features/noplaster.png"
                        detail={["2-3 bedrooms / 1 bathroom", "Open kitchen and living with pitched ceiling", "All appliances Fitted to run off electricity grid", "sewerage network or septic tank", "Verandah"]}
                        link="/RangeDetail"
                        id={2}
                    />


                    <Range
                        title="Sports rooms - customed faculties - community rooms"
                        price="$249,000"
                        image="./assets/range/footyroomstigers1.jpg"
                        detail={["Engineered to Australian Standards", "Large open plan", "Solar panelled and off the grid powered"]}
                        link="/RangeDetail"
                        id={3}
                    />
                </div>

            </div>
        </>
    )
}

export default OurRange;