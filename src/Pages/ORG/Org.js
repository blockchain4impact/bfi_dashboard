import React from 'react'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { cardData } from '../Home/Home';
import '../ORG/Org.css'

export default function Org() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return (
        <div className='org-main'>
            <div className='timeline-tags'>
                <h2 style={{ color: "#232360" }}>Timeline</h2>
                <p className='timeline-tag tag'>Today</p>
                <p className='timeline-date-tag tag'><LeftOutlined />&nbsp; Nov, 22, 2023 &nbsp;<RightOutlined /></p>
            </div>
            <div className='org-body'>
                <div className='monthname'>
                    {months.map((month) => <p>{month}</p>
                    )}
                </div>
                {cardData.map((val) => val.pathname === window.location.pathname &&
                    val.items.map((value) =>
                        <ProgressBar
                            percentage={value.percentage}
                            lightbgcolor={'rgba(255, 248, 229, 1)'}
                            bgcolor={value.percentage!=='100%'? '#FFD659': '#97C354'}
                            title={value.title}
                            names={value.names}
                        />
                    )
                )}
            </div>
        </div>
    )
}
