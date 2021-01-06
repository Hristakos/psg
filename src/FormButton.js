import React from 'react'
import "./FormButton.css"
export default function FormButton({ title, width = 250, height, onSubmit, type, margin = 0 }) {
    return (
        <div className="button-wrapper" >
            <button type={type} onClick={onSubmit} style={{ color: "white", fontSize: "26px", width: "90%", marginLeft: "5%", marginRight: "5%", height: height, backgroundColor: "black", borderRadius: "20px", outline: "none" }} >{title}</button>
        </div>
    )
}
