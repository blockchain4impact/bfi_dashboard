import React from 'react';

const OrgTimeline = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const tagColors = ["#FFCBAE", "#CEF2E4", "#8ECDF9", "#BEFBFF", "#D2B7FF"]
    const data = [{
        title: '3 members in BRI, 7 in IDFS and 2 in BFI Support roles',
        names: ['P&F', 'G', 'R', 'N', 'D'],
        startDate: '31 Jan 2024',
        endDate: '15 Nov 2024',
        progress: '50%',
    },
    {
        title: 'Clean audit with PWC',
        names: ['D', 'G', 'G'],
        startDate: '31 Jan 2024',
        endDate: '25 Oct 2024',
        progress: '62%',

    },
    {
        title: 'Infrastructure',
        names: ['D', 'N'],
        startDate: '31 Jan 2023',
        endDate: '31 Aug 2023',
        progress: '30%',
    },
    {
        title: 'Hiring External Partners',
        names: ['R', 'N'],
        startDate: '31 Jan 2024',
        endDate: '31 Aug 2024',
        progress: '100%',
    },
    {
        title: 'PR and Social Media Promotions',
        names: ['F', 'N'],
        startDate: '31 Jan 2024',
        endDate: '31 Oct 2024',
        progress: '90%',
    },
    {
        title: 'Website updation',
        names: ['G', 'N', 'F'],
        startDate: '31 Jan 2024',
        endDate: '31 Dec 2024',
        progress: '50%',
    },
    {
        title: 'Print Media Activities and PR',
        names: ['F', 'N'],
        startDate: '31 Jan 2024',
        endDate: '31 Nov 2024',
        progress: '75%',
    },
    {
        title: 'Dashboard creation',
        names: ['F', 'N', 'BFI'],
        startDate: '31 Jan 2024',
        endDate: '31 Aug 2024',
        progress: '75%',
    },
    {
        title: 'Procurements and Vendor Payments',
        names: ['D', 'N', 'G'],
        startDate: '31 Jan 2024',
        endDate: '31 Aug 2024',
        progress: '75%',
    },
    {
        title: 'Onboarding a Grant/ Project management platform',
        names: ['D', 'N'],
        startDate: '31 Jan 2024',
        endDate: '31 Nov 2024',
        progress: '50%',
    },
    {
        title: 'Closure of projects under Crypto Relief',
        names: ['D', 'N'],
        startDate: '31 Jan 2024',
        endDate: '31 Dec 2024',
        progress: '75%',
    }
    ]
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
            {data.map((value, i) => {
                const xPos = 120 * (months.indexOf(value.startDate.substring(3, 6)) + 1) - 90;
                const yPos = 120 * (months.indexOf(value.endDate.substring(3, 6)) + 1) - 90;
                const width = value.startYear === 2023 && value.endYear === 2024 ? yPos - xPos + 25 : yPos - xPos
                const percentage = width * (parseInt(value.progress) / 100)
                return (
                    <g>
                        <foreignObject className="node" x={xPos + 5} y={`100` * `${i + 1}` - 25} width="100%" height="50">
                            <body xmlns="http://www.w3.org/1999/xhtml">
                                <div className='timeline-names' style={{ display: 'flex', gap: '1vh' }}>
                                    {value.names?.map((name, index) => {
                                        const colour = tagColors[Math.floor((Math.random() * tagColors.length))];
                                        return (
                                            <p style={{ backgroundColor: colour, paddingInline: '5px', borderRadius: '5vh', height: '21px', fontWeight: '700', color: '#505050' }} >{name}</p>
                                        )
                                    })}
                                    <p style={{ textAlign: 'left', fontWeight: '500', color: '#768396' }}>{value.title}</p>
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
                                {value.progress}
                            </text>
                        </svg>
                    </g>

                )
            })}
        </svg >
    );
};

export default OrgTimeline;
