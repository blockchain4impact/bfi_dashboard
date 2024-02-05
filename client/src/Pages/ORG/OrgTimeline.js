import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrgTimeline = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const fetchData = async () => {
        await axios.get(`https://bfi-server.vercel.app/`).then((res) => setData(res.data))
    }
    useEffect(() => {
        fetchData()

    }, []);
    const navigateToEdit = (id) => {
        navigate('/edit', { state: id })
    }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const tagColors = ["#FFCBAE", "#CEF2E4", "#8ECDF9", "#BEFBFF", "#D2B7FF"]
    return (
        <svg viewBox="0 0 1450 1450" preserveAspectRatio="none">
            <g>
                {months.map((month, i) =>
                    <>
                        <text x={120 * `${i + 1}` - 90} y="20"
                            fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" font-weight="700" font-size='16px'>{month}</text>
                        <line x1={120 * `${i + 1}` - 90} x2={120 * `${i + 1}` - 90} y1="60" y2={1000 * month.length} fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>
                    </>
                )}
            </g>
            {data.filter((val, index) => val.title === 'org').map((value, i) => {
                const year = value.endDate.substring(7, 11)
                let yPos =0, xPos = 0
                if (year === '24') {
                    yPos = 120 * (months.indexOf('Dec') + 1) - 90;
                }
                else {
                    yPos = 120 * (months.indexOf(value.endDate.substring(3, 6)) + 1) - 90;
                }
                xPos = 120 * (months.indexOf(value.startDate.substring(3, 6)) + 1) - 90;
                const width = yPos - xPos
                const percentage = width * (parseInt(value.Overallprogress) / 100)
                return (
                    <g onClick={() => { navigateToEdit(value._id) }} style={{ cursor: 'pointer' }}>
                        <foreignObject className="node" x={xPos + 5} y={`100` * `${i + 1}` - 25} width="100%" height="50">
                            <body xmlns="http://www.w3.org/1999/xhtml">
                                <div className='timeline-names' style={{ display: 'flex', gap: '1vh' }}>
                                    <p style={{ backgroundColor: tagColors[Math.floor((Math.random() * tagColors.length))], paddingInline: '6px', display: 'flex', alignItems: 'center', borderRadius: '50%', fontWeight: '700', color: '#505050', fontSize: '12px' }}>{value.dashboardItems[0].BFI?.substring(0, 1)}</p>
                                    <p style={{ backgroundColor: tagColors[Math.floor((Math.random() * tagColors.length))], paddingInline: '6px', display: 'flex', alignItems: 'center', borderRadius: '50%', fontWeight: '700', color: '#505050', fontSize: '12px' }}>{value.dashboardItems[0].DFS?.substring(0, 1)}</p>
                                    <p style={{ textAlign: 'left', fontWeight: '500', color: '#768396', fontSize: '14px' }}>{value.objective}</p>
                                </div>
                            </body>
                        </foreignObject>
                        <svg x={xPos} y={`100` * `${i + 1}`}>
                            <rect x='0' y='0' width={width} height="45" rx="25" ry="25" fill={value.progress === '100%' ? "#97C354" : "#FFF8E5"}></rect>
                            <rect x='0' y='0' width={percentage} height="45" rx="25" ry="25" fill={value.progress === '100%' ? "#97C354" : "#FFD659"}></rect>
                            <circle cx='25' cy='22' r="7" fill={value.progress === '100%' ? "#BAE47A" : "#E6C151"} />
                            <circle cx='25' cy='22' r="3" fill="#FFF" />
                        </svg>
                        <svg x={yPos + 15} y={`100` * `${i + 1}` + 8}>
                            <filter id="shadow">
                                <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
                            </filter>
                            <rect filter="url(#shadow)" x='0' y='0' width="49px" height="28px" rx="14" ry="14" fill="#FFFF"></rect>
                            <text x='23.5' y='18' fill="black" fontSize={'12px'} font-weight="600" dx="-11.1953125px">
                                {value.Overallprogress}
                            </text>
                        </svg>
                        {/* <svg x={xPos} y={`120` * `${i + 1}`}>
                            {value.dashboardItems.map((val, i) => {
                                return (
                                    <g>
                                        <foreignObject className="node" x={xPos + 5} y={`70` * `${i + 1}` - 25} width="100%" height="50">
                                            <body xmlns="http://www.w3.org/1999/xhtml">
                                                <div className='timeline-names' style={{ display: 'flex', gap: '1vh' }}>
                                                    <p style={{ backgroundColor: tagColors[Math.floor((Math.random() * tagColors.length))], paddingInline: '6px', display: 'flex', alignItems: 'center', borderRadius: '50%', fontWeight: '700', color: '#505050', fontSize: '12px' }}>{val.BFI?.substring(0, 1)}</p>
                                                    <p style={{ backgroundColor: tagColors[Math.floor((Math.random() * tagColors.length))], paddingInline: '6px', display: 'flex', alignItems: 'center', borderRadius: '50%', fontWeight: '700', color: '#505050', fontSize: '12px' }}>{val.DFS?.substring(0, 1)}</p>
                                                    <p style={{ textAlign: 'left', fontWeight: '500', color: '#768396', fontSize: '14px' }}>{val.Key_Results}</p>
                                                </div>
                                            </body>
                                        </foreignObject>
                                        <svg x={xPos} y={`70` * `${i + 1}`}>
                                            <rect x='0' y='0' width={width} height="18" rx="10" ry="10" fill={value.progress === '100%' ? "#97C354" : "#FFF8E5"}></rect>
                                            <rect x='0' y='0' width={percentage} height="18" rx="10" ry="10" fill={value.progress === '100%' ? "#97C354" : "#FFD659"}></rect>
                                        </svg>
                                        <svg x={yPos + 15} y={`68` * `${i + 1}`}>
                                            <filter id="shadow">
                                                <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
                                            </filter>
                                            <rect filter="url(#shadow)" x='0' y='0' width="50px" height="28px" rx="14" ry="14" fill="#FFFF"></rect>
                                            <text x='23.5' y='18' fill="black" fontSize={'12px'} font-weight="600" dx="-11.1953125px">
                                                {val.progress}
                                            </text>
                                        </svg>
                                    </g>
                                )

                            })}
                        </svg> */}


                    </g>

                )
            })}
        </svg >
    );
};

export default OrgTimeline;
