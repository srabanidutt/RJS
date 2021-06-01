import React from 'react'

export default function Rectangle(props) {
    console.log("Reactangle called",props.child);
    return (
        <div>
            <div className={props.child ? "buttonTrue": "buttonFalse"}/>
        </div>
    )
}
