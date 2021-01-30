import React from 'react';
import "./Difference.css"


const DifferenceSmall = ({ image, heading, detail }) => {
    return (
        <div className="difference-container-small">
            <div className="difference-icon">
                <img className="image-icon" src={image} />
            </div>
            <div className="difference-heading">
                <p>{heading}</p>
            </div>
            <div className="difference-detail">
                <p>{detail}</p>
            </div>
        </div>
    )

}
const Differencelarge = ({ image, heading, detail }) => {
    return (
        <div className="difference-container-large">
            <div className="difference-icon">
                <img className="image-icon" src={image} />
            </div>
            <div className="difference-heading">
                <p>{heading}</p>
            </div>
            <div className="difference-detail">
                <p>{detail}</p>
            </div>
        </div>
    )

}

function Difference() {
    return (
        <>
            <div className="difference-page-heading">So, what makes us different? </div>
            <div className="difference-wrapper">

                <div className="difference-outline-small">

                    <DifferenceSmall
                        image="./assets/story/tools.svg"
                        heading="No concrete, digging or stumping"
                        detail="Our unique foundation system is comprised of a engineered insulated panel floor system which achieves a 7+ energy star rating and high BAL and cyclone ratings" />
                    <DifferenceSmall
                        image="./assets/story/maintenance.svg"
                        heading="Little to no maintenance"
                        detail="Our customised wall and floor panels are engineered to Australian standards and specifications, which are fully insulated meaning plasterboards, paint, tiles, brick work or render finishes are not required" />
                </div>
                <div className="difference-outline-large">
                    <Differencelarge
                        image="./assets/story/time.svg"
                        heading="45-day build time"
                        detail="Our modular home turns traditional building on its head with no studs, joists, bearers, digging or excavation required, the modular home can be built anywhere within 45-days with materials delivered direct to site. Our unique roof, wall and floor panels mean fast installation with no expensive trades needed for plastering, painters, tilers, brick layers, renders.
         Mininimal number of trades personal required" />
                </div>
            </div>
        </>



    )
}

export default Difference;