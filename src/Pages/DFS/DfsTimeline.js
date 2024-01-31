import React from 'react';

const DfsTimeline = () => {
    const oct = 50, nov = 250, dec = 450, janmar = 700, aprjun = 900, julsep = 1100, octdec = 1300;
    const data = [{
        title: 'Hire core IDFS team',
        names: ['N', 'R'],
        startDate: '31 Oct 2023',
        endDate: '15 Nov 2023',
        progress: '35%',
        startYear: 2023,
        endYear: 2023
    },
    {
        title: 'Launch HCD Fellowship',
        names: ['N'],
        startDate: '31 Oct 2023',
        endDate: '25 Feb 2024',
        progress: '0%',
        startYear: 2023,
        endYear: 2024
    },
    {
        title: 'Launch IHCR Fund',
        names: ['R', 'N'],
        startDate: '31 Oct 2023',
        endDate: '31 Dec 2023',
        progress: '30%',
        startYear: 2023,
        endYear: 2023
    },
    {
        title: 'Regular Program Monitoring + Team Governance',
        names: ['R', 'N'],
        startDate: '31 Oct 2023',
        endDate: '31 Jan 2024',
        progress: '45%',
        startYear: 2023,
        endYear: 2024
    }
    ]
    const tagColors = [ "#FFCBAE", "#CEF2E4", "#8ECDF9", "#BEFBFF", "#D2B7FF"]
    const findStartDate = (index) => {
        let xPos;
        const month = data[index].startDate.substring(3, 6)
        const year = data[index].startDate.substring(7, 11)
        if (year === '2023') {
            if (month === 'Oct') {
                xPos = oct
            } else if (month === 'Nov') {
                xPos = nov
            } else if (month === 'Dec') {
                xPos = dec
            }
        } else if (year === '2024') {
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

    const findEndingDate = (index) => {
        let yPos;
        const month = data[index].endDate.substring(3, 6)
        const year = data[index].endDate.substring(7, 11)
        if (year === '2023') {
            if (month === 'Oct') {
                yPos = oct
            } else if (month === 'Nov') {
                yPos = nov
            } else if (month === 'Dec') {
                yPos = dec
            }
        } else if (year === '2024') {
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

    return (
        <svg viewBox="0 0 1400 1400" preserveAspectRatio="none">
            <g>
                <text x="265" y="15"
                    fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" font-weight="700" font-size='16px'>2023</text>

                <text x="50" y="55" id="oct"
                    font-weight="600" dx="-11.1953125px">Oct</text>
                <line x1="50" x2="50" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

                <text x="250" y="55"
                    fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Nov</text>
                <line x1="250" x2="250" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

                <text x="450" y="55" id="dec"
                    fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Dec</text>
                <line x1="450" x2="450" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

                <line x1="600" x2="600" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" stroke-width="1"></line>

                <text x="965" y="15"
                    fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" font-weight="700" font-size='16px'>2024</text>

                <text x="700" y="55" id="oct"
                    fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Jan - Mar</text>
                <line x1="725" x2="725" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

                <text x="900" y="55"
                    fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Apr - Jun</text>
                <line x1="925" x2="925" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

                <text x="1100" y="55" id="dec"
                    fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Jul - Sep</text>
                <line x1="1125" x2="1125" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

                <text x="1300" y="55" id="dec"
                    fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Oct - Dec</text>
                <line x1="1325" x2="1325" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

            </g>
            {data.map((value, i) => {
                const xPos = findStartDate(i);
                const yPos = findEndingDate(i);
                const width = value.startYear === 2023 && value.endYear === 2024 ? yPos - xPos + 25 : yPos - xPos
                const percentage = width * (parseInt(value.progress) / 100)
                return (
                    <g width={'50vh'}>
                        <foreignObject className="node" x={value.startYear === 2023 ? xPos + 10 : xPos + 35} y={`100` * `${i + 1}` - 25} width="100%" height="50">
                            <body xmlns="http://www.w3.org/1999/xhtml">
                                <div className='timeline-names' style={{ display: 'flex', gap: '1vh' }}>
                                    {value.names?.map((name, index) => {
                                        const colour = tagColors[Math.floor((Math.random() * tagColors.length))];
                                        return (
                                            <p style={{ backgroundColor: colour, paddingInline: '5px', borderRadius: '5vh', height: '21px', fontWeight: '700', color: '#505050' }} >{name}</p>
                                        )
                                    })}
                                    <p style={{ textAlign: 'left', fontWeight: '500', color: '#768396' }} onClick={() => findStartDate(i)}>{value.title}</p>
                                </div>
                            </body>
                        </foreignObject>
                        <svg x={value.startYear === 2023 ? xPos : xPos + 25} y={`100` * `${i + 1}`}>
                            <rect x='0' y='0' width={width} height="45" rx="25" ry="25" fill="rgba(253, 212, 212, 1)"></rect>
                            <rect x='0' y='0' width={percentage} height="45" rx="25" ry="25" fill="rgba(243, 87, 87, 1)"></rect>
                            <circle cx='25' cy='22' r="7" fill="rgba(195, 72, 72, 1)" />
                            <circle cx='25' cy='22' r="3" fill="#FFF" />
                        </svg>
                        <svg x={yPos + 35} y={`100` * `${i + 1}` + 8}>
                            <filter id="shadow">
                                <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
                            </filter>
                            <rect filter="url(#shadow)" x='0' y='0' width="49px" height="28px" rx="14" ry="14" fill="#FFFF"></rect>
                            <text x='23.5' y='18' fill="black" fontSize={'12px'} font-weight="600" dx="-11.1953125px">
                                {value.progress}
                            </text>
                        </svg>
                    </g>

                )
            })}
        </svg >
    );
};

export default DfsTimeline;
