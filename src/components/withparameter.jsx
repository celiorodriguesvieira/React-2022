import React from "react"

export default function Parameters(props){
    const status = props.grade >= 7 ? "Approved" : "Fail"

    console.log(props)
    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.name} is with {props.pass} {props.grade}! {props.name} is {status}! </h3>
        </div>
    )
}