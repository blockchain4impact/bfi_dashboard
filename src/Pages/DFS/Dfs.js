import React, { useEffect, useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import { cardData } from '../Home/Home';
import "../DFS/Dfs.css"
import Timeline from '../../Components/Timeline/Timeline'

export default function Dfs() {
    let postCount;
    const startyear = new Date(2023)
    const endyear = new Date(2024)
    const years = [2023, 2024]
    const currMonth = [
        'Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'
    ]
    const prevMonth = [
        'Oct', 'Nov', 'Dec'
    ]
    const timelinedata = () => {
        cardData.map((val) => val.pathname === window.location.pathname && (postCount = val.items.length))
    }
    timelinedata()

    return (
        <div className='dfs'>
            <div className='timeline-tags'>
                <h2 style={{ color: "#232360" }}>Timeline</h2>
                <p className='timeline-tag tag'>Today</p>
                <p className='timeline-date-tag tag'><LeftOutlined />&nbsp; Nov, 22, 2023 &nbsp;<RightOutlined /></p>
            </div>


            <div className='monthname' style={{ justifyContent: 'space-around', width: "100%" }}>
                {years.map((year) =>
                    <div className='dfs-calendar'>
                        <p>{year}</p>
                        <p className='dfs-months'> {year > 2023 ?
                            currMonth.map((currMonth) => <p>{currMonth}</p>)
                            :
                            prevMonth.map((prevMonth) => <p>{prevMonth}</p>)}</p>
                    </div>
                )}

            </div>
            <div className='bri-body'>
                {cardData.map((val) => val.pathname === window.location.pathname &&
                    val.items.map((value) =>
                        <ProgressBar
                            percentage={value.percentage}
                            // lightbgcolor={'rgba(255, 248, 229, 1)'}
                            // bgcolor={value.percentage !== '100%' ? '#FFD659' : '#97C354'}
                            title={value.title}
                            names={value.names}
                        />
                    )
                )}
            </div>

        </div>
    )
}
