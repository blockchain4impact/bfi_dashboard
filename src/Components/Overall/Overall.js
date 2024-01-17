import React from 'react'
import CircularProgress from '../CircularPB/CircularProgress'
import "../Overall/Overall.css"

export default function Overall(props) {
    return (
        <div className='overall-main'>
            <div className='overall-head'>
                <h4>{props.data.title}</h4>
                <p>Overall Percentage</p>
            </div>
            {
                props.data.overall?.map((value, index) => (
                    <div className='overall-body-content'>
                        <CircularProgress percentage={value.percentage} width={65} />
                        <div className='names'>
                            {value.names.map((name, index) =>
                                <p className='name-tag'>{name}</p>
                            )}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
