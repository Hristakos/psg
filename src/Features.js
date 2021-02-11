import React from 'react';
import "./Features.css"


const Feature = ({ heading, detail, image = "./tools.svg" }) => {
    return (
        <div className="feature-box">

            <div className="feature-image-container">
                <img className="feature-image" src={image}></img>
            </div>
            <div className="feature-text-container">

                <div className="feature-heading">{heading}</div>
                <div className="feature-detail">{detail}</div>
            </div>

        </div>
    )

}

function Features() {
    return (
        <>
            <div className="feature-page-heading">A closer look at the features </div>
            <div className="features-outline">

                <Feature
                    heading="Outstanding design"
                    detail="Australian designed and owned demonstrating the highest standards of finish and aesthetic appeal fitting easily into the coastal or country landscape. Internally there is a feeling of spaciousness created by a high pitch ceiling re-enforced with clean lines in all areas."
                    image="./assets/features/design.png"
                />
                <Feature
                    heading="No local government permits"
                    detail="A new patented footing system called the QX -100 Anchor Assembly, is a key feature and an alternative to the traditional concrete foundation or stumping system of the traditional home. This means the modulive home can be built without traditional permits."
                    image="./assets/features/permits.png" />
                <Feature
                    heading="No plaster, no problem"
                    detail={<p>Our unique wall panelling completely removes the need for plaster and paint. We use a pre-coated MDF board <span style={{ color: "yellow" }}> EOMRMDF</span> to create a durable, modern and easy to clean alternative to plaster with no painting required </p>}
                    image="./assets/features/noplaster.png" />
                <Feature
                    heading="Never too hot, never too cold"
                    detail={<p>Our customised Australian-made panels have a unique thermal sandwich composition which gives the building shell exceptional thermal qualities – exceeding a 7+-star Energy Rating in all <span style={{ color: "yellow" }}>Metropolitan and Regional Victorian</span> areas. In warmer climates the unique insulation qualities achieves a higher rating.</p>}
                    image="./assets/features/hotcold.png" />
                <Feature
                    heading="Solar capability"
                    detail="Our unique roofing systems has capacity for a substantial solar panel array with an ability to be completely off-the-grid ideal for communities in remote areas of Australia and overseas."
                    image="./assets/features/solar.png" />
                <Feature
                    heading="Strong and durable"
                    detail="A unique steel subfloor means our modular home is strong but lightweight, termite proof and rust resistant. Australian made and engineered our modular home has been stress tested to all Australian standards achieving outstanding energy, fire and cyclone ratings"
                    image="./assets/features/durable.png" />

            </div>
        </>
    )
}

export default Features;