import React from 'react'
import "../ProgressBar/ProgressBar.css"

export default function ProgressBar(props) {
    let stroke, textColor='#FFF', percentColor; 
    if (parseInt(props.percentage) >= 0 && parseInt(props.percentage) <= 25){//red
        percentColor = "rgba(243, 87, 87, 1)"
        stroke = "rgba(253, 212, 212, 1)"
        textColor = "rgba(230, 193, 81, 1)"
    }   
    else if (parseInt(props.percentage) > 25 && parseInt(props.percentage) < 50){
        stroke = "rgba(255, 214, 89, 1)" //yellow
        textColor = "rgba(230, 193, 81, 1)"
    }
    else if (parseInt(props.percentage) >= 50 && parseInt(props.percentage) < 75) {
        stroke = "rgba(255, 214, 89, 1)" //yellow
        textColor = "rgba(230, 193, 81, 1)"
    }
    else if(parseInt(props.percentage)===100)
        textColor = "rgba(186, 228, 122, 1)"
    else{
        stroke = "rgba(151, 195, 84, 1)" //green
        textColor = "rgba(230, 193, 81, 1)"
    }
    return (
        <div className='progressbar'>
            <div className='progressbar-title'>
                {props.names?.map((name) => <p className='progressbar-name-tag'>{name.substring(0,1)}</p>)}
                <p style={{fontWeight: 800}}>{props.title}</p>
            </div>
            <div className='progressbar-body'>
                <div className='progressbar-container' style={{ backgroundColor: props.bgColor? props.bgColor : stroke, width: props.percentage!=='0%'? props.percentage : '5%' }}>
                    <div className='progress-done' style={{ backgroundColor: props.percentColor? props.percentColor : percentColor, width: props.percentage!=='0%'? props.percentage : '25%' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <circle cx="7.5" cy="7.5" r="5.5" fill="white" stroke={textColor} stroke-width="4" />
                        </svg>
                    </div>
                </div>
                <div className='progress-percentage'><h5>{props.percentage}</h5> </div>
            </div>
        </div>
    )
}
