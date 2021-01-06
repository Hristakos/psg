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
                    image="./design.png"
                />
                <Feature
                    heading="No local government permits"
                    detail="A new patented footing system called the QX -100 Anchor Assembly fixing system is a key feature and an alternative to the traditional concrete foundation or stumping system of the traditional home."
                    image="./permits.png" />
                <Feature
                    heading="No plaster, no problem"
                    detail="Our unique wall panelling completely removes the need for plaster and paint. We use a pre-coated MDF board EOMRMDF to create a durable, modern and easy to clean alternative to plaster with no painting required"
                    image="./noplaster.png" />
                <Feature
                    heading="Never too hot, never too cold"
                    detail="Our customized Australian-made panels have a unique thermal sandwich composition which gives the building shell exceptional thermal qualities – exceeding a 7+-star Energy Rating in all Metropolitan and Regional Victorian areas. In warmer climates the unique insulation qualities achieves a higher rating."
                    image="./hotcold.png" />
                <Feature
                    heading="Solar capability"
                    detail="Ability to be completely off-the-grid and self sufficient through solar power and environmentally rated water and sewage options. The roofing system also has significant and strengthened capacity for a substantial solar-panel areas – ideal for communities in remote areas of Australia."
                    image="./solar.png" />
                <Feature
                    heading="Strong and durable"
                    detail="A unique steel subfloor means our flat-pack home is strong but lightweight, termite proof and rust resistant. Australian made and engineered our flat pack home has been stress tested to all Australian standards achieving outstanding energy, fire and cyclone ratings"
                    image="./durable.png" />

            </div>
        </>
    )
}

export default Features;