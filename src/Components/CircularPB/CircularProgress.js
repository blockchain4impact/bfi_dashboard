import React from 'react'
import "../CircularPB/CircularProgress.css"

export default function CircularProgress(props) {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    let offset = (Math.floor(100 - parseInt(props.percentage)) * circumference) / 100;
    let stroke, textColor='#FFF';
    if (parseInt(props.percentage) >= 0 && parseInt(props.percentage) <= 25)
        stroke = "rgba(255, 80, 80, 1)" //red
    else if (parseInt(props.percentage) > 25 && parseInt(props.percentage) < 50)
        stroke = "rgba(240, 152, 76, 1)" //mustard
    else if (parseInt(props.percentage) >= 50 && parseInt(props.percentage) < 75) {
        stroke = "rgba(255, 214, 89, 1)" //yellow
        textColor = "rgba(108, 85, 15, 1)"
    }
    else
        stroke = "rgba(151, 195, 84, 1)" //green
    console.log(stroke)
    return (
        <svg width="50" height="50" viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)' }}>
            <circle
                r="70"
                cx="80"
                cy="80"
                fill="transparent"
                stroke="#e0e0e0"
                stroke-width="17px"

            />

            <circle
                fill={stroke}
                r="48"
                cx="80"
                cy="80"
            />

            <circle
                r="70"
                cx="80"
                cy="80"
                fill="transparent"
                stroke={stroke}
                stroke-linecap="round"
                stroke-width="19px"
                stroke-dasharray={circumference}
                stroke-dashoffset={offset}

            />

            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                strokeWidth="1px"
                dy=".3em"
                fill={textColor}
                style={{ transform: 'rotate(90deg) translate(0px, -160px)' }}
                font-size="2em"
                font-weight="bold"
            >
                {`${props.percentage}`}
            </text>
        </svg>
    )
}
