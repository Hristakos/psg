import React from 'react'
import "./TextInput.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function TextInput({ label, labelTextColor = "#f96f56", inputTextColor = "grey", placeholder, width = 200, height = 50, capitalize = false, labelFontSize = 10, inputFontSize = 15, iconName = "question", iconColor = "white", iconWidth = "50", name, onChange, error, margin = 10, screenWidth = 0 }) {

    return (
        <div style={{ width: "100%" }}>
            <div className="text-input-wrapper">

                {iconName && <div className="icon-wrapper">

                    <div className="icon" >

                        <FontAwesomeIcon icon={iconName} size={"1x"} color={"white"} />
                    </div>

                </div>}

                <div className="text-input-container">

                    <label className="text-input-label" >{label}</label>


                    <input className="text-input" onChange={onChange} type="text" placeholder={placeholder} name={name} />

                </div>


            </div>

            <div className="error-text" >
                {error}</div>




        </div>
    )
}
