import React from "react";

export default function Random(props) {
    const {min, max} = props;
    const random = parseInt(Math.random() * (max - min) + min)
    
    return(
        <div>
            <h1>Random Values</h1>
            <h2>Min = {min}</h2>
            <h2>Max = {max}</h2>
            <strong><h2>Value selected: {random}</h2></strong>
        </div>
    )
}
