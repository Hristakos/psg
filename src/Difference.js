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
        <div className="difference-wrapper">
            <div className="difference-page-heading">So, what makes us different? </div>
            <div className="difference-outline-small">

                <DifferenceSmall
                    image="tools.svg"
                    heading="No concrete, digging or stumping."
                    detail="Our unique foundation system is comprised of a engineered insulated panel floor system which achieves a 7+ energy star rating and high BAL and cyclone ratings" />
                <DifferenceSmall
                    image="maintenance.svg"
                    heading="Little to no maintenance."
                    detail="Customised wall, floor roof and floor panels engineered to Australian design and standards are fully insulated meaning no plasterboards, paint, cornices, tiles, brick work, render" />
            </div>
            <div className="difference-outline-large">
                <Differencelarge
                    image="time.svg"
                    heading="45-day build time"
                    detail="Our flat-pack home turns traditional building on its head with no studs, joists, bearers, digging or excavation required, the flat-pack home can be built anywhere within 45-days with materials delivered direct to site. Our unique roof, wall and floor panels mean fast installation with no expensive trades needed for plastering, painters tilers, brick layers, renders.
         Mininimal number of trades personal required." />
            </div>
        </div>

        //         <div className="difference-outline">
        //             <div className="half-screen-top">
        //                 <div className="left-top-box">
        //                     <div className="difference-container">
        //                         <div className="difference-icon">
        //                             <img className="image-icon" src="tools.svg" />
        //                         </div>
        //                         <div className="difference-heading">
        //                             <p>No concrete, digging or stumping.</p>
        //                         </div>
        //                         <div className="difference-detail">
        //                             <p>Our unique foundation system is comprised of a engineered insulated panel floor system which achieves a 7+ energy star rating and high BAL and cyclone ratings</p>
        //                         </div>
        //                     </div>

        //                 </div>
        //                 <div className="right-top-box">
        //                     <div className="difference-container">
        //                         <div className="difference-icon">
        //                             <img className="image-icon" src="maintenance.svg" />
        //                         </div>
        //                         <div className="difference-heading">
        //                             <p>Little to no maintenance.</p>
        //                         </div>
        //                         <div className="difference-detail">
        //                             <p>Customised wall, floor roof and floor panels engineered to Australian design and standards are fully insulated meaning no plasterboards, paint, cornices, tiles, brick work, render</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="half-screen-bottom">
        //                 <div className="bottom-box">
        //                     <div className="difference-container">
        //                         <div className="difference-icon">
        //                             <img className="image-icon" src="time.svg" />
        //                         </div>
        //                         <div className="difference-heading">
        //                             <p>45-day build time</p>
        //                         </div>
        //                         <div className="difference-detail">
        //                             <p>Our flat-pack home turns traditional building on its head with no studs, joists, bearers, digging or excavation required, the flat-pack home can be built anywhere within 45-days with materials delivered direct to site. Our unique roof, wall and floor panels mean fast installation with no expensive trades needed for plastering, painters tilers, brick layers, renders.
        // Mininimal number of trades personal required.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>


    )
}

export default Difference;