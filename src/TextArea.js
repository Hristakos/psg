import React from 'react'

import "./TextArea.css";

export default function TextArea({ width = 199, height, error, errorTextColor = "red", margin = 10, placeholder, fontSize = 15, onChange, color = "#2e3830" }) {
    return (
        <div style={{ width: "100%", height: "220px" }}>
            <textarea className="text-area" onChange={onChange} placeholder={placeholder} type="text" style={{ height: height, fontSize: fontSize, color: color }} />
            <div style={{ color: errorTextColor, textAlign: "left", height: "20px" }}>{error}</div>
        </div>
    )
}
