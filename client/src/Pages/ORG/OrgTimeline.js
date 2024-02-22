import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message, Spin } from 'antd';

const OrgTimeline = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false)
    const fetchData = async () => {
        await axios.get(`https://bfi-server.vercel.app/`).then((res) => setData(res.data))
    }
    useEffect(() => {
        setLoading(true)
        fetchData()
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);
    const error = (err) => {
        messageApi.open({
            type: 'error',
            content: err,
        });
    };
    const navigateToEdit = (id) => {
        navigate('/edit', { state: id })
    }
    const oct = 50, nov = 250, dec = 450, janmar = 700, aprjun = 900, julsep = 1100, octdec = 1300;
    const tagColors = ["#FFCBAE", "#CEF2E4", "#8ECDF9", "#BEFBFF", "#D2B7FF"]
    const startYear = (startDate) => {
        let year;
        year = startDate.substring(7, 11)
        return year
    }
    const endYear = (endDate) => {
        let year;
        year = endDate.substring(7, 11)
        return year
    }
    const findStartDate = (startDate) => {
        let xPos, month, year;

        month = startDate.substring(3, 6)
        year = startYear(startDate)
        if (year === '23') {
            if (month === 'Oct') {
                xPos = oct
            } else if (month === 'Nov') {
                xPos = nov
            } else if (month === 'Dec') {
                xPos = dec
            } else {
                xPos = oct
            }
        } else if (year === '24') {
            const month1 = ['Jan', 'Feb', 'Mar']
            const month2 = ['Apr', 'May', 'Jun']
            const month3 = ['Jul', 'Aug', 'Sep']
            const month4 = ['Oct', 'Nov', 'Dec']
            if (month1.includes(month)) {
                xPos = janmar
            } else if (month2.includes(month)) {
                xPos = aprjun
            } else if (month3.includes(month)) {
                xPos = julsep
            } else if (month4.includes(month)) {
                xPos = octdec
            }
        }
        return xPos

    }

    const findEndingDate = (endDate) => {
        let yPos, month, year;
        month = endDate.substring(3, 6)
        year = endYear(endDate)
        if (year === '23') {
            if (month === 'Oct') {
                yPos = oct
            } else if (month === 'Nov') {
                yPos = nov
            } else if (month === 'Dec') {
                yPos = dec
            } else {
                yPos = oct
            }
        } else if (year === '24') {
            const month1 = ['Jan', 'Feb', 'Mar']
            const month2 = ['Apr', 'May', 'Jun']
            const month3 = ['Jul', 'Aug', 'Sep']
            const month4 = ['Oct', 'Nov', 'Dec']
            if (month1.includes(month)) {
                yPos = janmar
            } else if (month2.includes(month)) {
                yPos = aprjun
            } else if (month3.includes(month)) {
                yPos = julsep
            } else if (month4.includes(month)) {
                yPos = octdec
            }
        }
        return yPos
    }

    const TimelineColor = (percentage) => {
        if (percentage < 25) {
            return 'rgba(253, 212, 212, 1)'
        } else if (percentage > 25 && percentage < 99) {
            return 'rgba(255, 248, 229, 1)'
        } else if (percentage === 100) {
            return 'rgba(151, 195, 84, 1)'
        }
    }

    const TimelineProgressColor = (percentage) => {
        if (percentage < 25) {
            return 'rgba(243, 87, 87, 1)'
        } else if (percentage > 25 && percentage < 99) {
            return 'rgba(255, 214, 89, 1)'
        } else if (percentage === 100) {
            return 'rgba(151, 195, 84, 1)'
        }
    }

    const buttonColor = (percentage) => {
        if (percentage < 25) {
            return 'rgba(195, 72, 72, 1)'
        } else if (percentage > 25 && percentage < 99) {
            return 'rgba(230, 193, 81, 1)'
        } else if (percentage === 100) {
            return 'rgba(186, 228, 122, 1)'
        }
    }
    return (
        <div>
            {contextHolder}
            <svg viewBox="0 0 1400 1400" preserveAspectRatio="none">
                <g>
                    <text x="265" y="15"
                        fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" fontWeight="700" fontSize='16px'>2023</text>

                    <text x="50" y="55" id="oct"
                        fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Oct</text>
                    <line x1="50" x2="50" y1="75" y2={100 * data.length} fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

                    <text x="250" y="55"
                        fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Nov</text>
                    <line x1="250" x2="250" y1="75" y2={100 * data.length} fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

                    <text x="450" y="55" id="dec"
                        fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Dec</text>
                    <line x1="450" x2="450" y1="75" y2={100 * data.length} fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

                    <line x1="600" x2="600" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" strokeWidth="1"></line>

                    <text x="965" y="15"
                        fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" fontWeight="700" fontSize='16px'>2024</text>

                    <text x="700" y="55" id="oct"
                        fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Jan - Mar</text>
                    <line x1="725" x2="725" y1="75" y2={100 * data.length} fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

                    <text x="900" y="55"
                        fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Apr - Jun</text>
                    <line x1="925" x2="925" y1="75" y2={100 * data.length} fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

                    <text x="1100" y="55" id="dec"
                        fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Jul - Sep</text>
                    <line x1="1125" x2="1125" y1="75" y2={100 * data.length} fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

                    <text x="1300" y="55" id="dec"
                        fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Oct - Dec</text>
                    <line x1="1325" x2="1325" y1="75" y2={100 * data.length} fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

                </g>
                {!loading ?
                    <>
                        {data.filter((val) => val.title === 'ORG').map((value, i) => {
                            const xPos = findStartDate(value.startDate)
                            const yPos = findEndingDate(value.endDate)
                            const width = startYear(value.startDate) === '23' && endYear(value.endDate) === '24' ? yPos - xPos + 25 : yPos - xPos
                            const percentage = width * (parseInt(value.Overallprogress) / 100)
                            var textx = endYear(value.endDate) === '23' ? yPos + 15 : yPos + 45
                            if (xPos === yPos) {
                                textx = endYear(value.endDate) === '23' ? yPos + 55 : yPos + 85
                            }
                            return (
                                <g width={'50vh'} onClick={() => { navigateToEdit(value._id) }} style={{ cursor: 'pointer' }} key={i}>
                                    <foreignObject className="node" x={startYear(value.startDate) === '23' ? xPos + 10 : xPos + 35} y={`100` * `${i + 1}` - 25} width="100%" height="50">
                                        <div className='timeline-names' style={{ display: 'flex', gap: '1vh' }}>
                                            <p style={{ backgroundColor: tagColors[Math.floor((Math.random() * tagColors.length))], paddingInline: '5px', display: 'flex', alignItems: 'center', borderRadius: '50%', fontWeight: '700', color: '#505050', fontSize: '12px' }}>{value.dashboardItems[0].BFI?.substring(0, 1)}</p>
                                            <p style={{ backgroundColor: tagColors[Math.floor((Math.random() * tagColors.length))], paddingInline: '5px', display: 'flex', alignItems: 'center', borderRadius: '50%', fontWeight: '700', color: '#505050', fontSize: '12px' }}>{value.dashboardItems[0].DFS?.substring(0, 1)}</p>
                                            <p style={{ textAlign: 'left', fontWeight: '700', color: '#768396', fontSize: '14px' }}>{value.objective}</p>
                                        </div>
                                    </foreignObject>
                                    <svg x={startYear(value.startDate) === '23' ? xPos : xPos + 25} y={`100` * `${i + 1}`}>
                                        <rect x='0' y='0' width={width} height="45" rx="25" ry="25" fill={TimelineColor(parseInt(value.Overallprogress))}></rect>
                                        <rect x='0' y='0' width={percentage ? percentage : '50'} height="45" rx="25" ry="25" fill={TimelineProgressColor(parseInt(value.Overallprogress))}></rect>
                                        <circle cx='25' cy='22' r="7" fill={buttonColor(parseInt(value.Overallprogress))} />
                                        <circle cx='25' cy='22' r="3" fill="#FFF" />
                                    </svg>
                                    <svg x={textx} y={`100` * `${i + 1}` + 8}>
                                        <filter id="shadow">
                                            <feDropShadow dx="0.2" dy="0.2" stdDeviation="0.1" />
                                        </filter>
                                        <rect filter="url(#shadow)" x='0' y='0' width="49px" height="28px" rx="14" ry="14" fill="#FFFF"></rect>
                                        <text x='23.5' y='18' fill="black" fontSize={'12px'} fontWeight="600" dx="-11.1953125px">
                                            {value.Overallprogress}
                                        </text>
                                    </svg>
                                </g>

                            )
                        })}
                    </>
                    :
                    <foreignObject className="node" x={0} y={200} width="100%" height="50">
                        <Spin />
                    </foreignObject>
                }
            </svg >
        </div>
    );
};

export default OrgTimeline;
