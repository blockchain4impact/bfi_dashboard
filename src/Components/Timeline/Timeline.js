import React from 'react';

const Timeline = () => {
    const years = [];
    for (let i = 2022; i <= 2023; i++) {
        years.push(i);
    }
    const oct = 50, nov = 250, dec = 450, janmar = 700, aprjun = 900, julsep = 1100, octdec = 1300;

    const data = [{
        title: 'Hire core IDFS team',
        names: ['N', 'G'],
        startDate: oct,
        endDate: dec,
        progress: '35%',
        year: 2023
    },
    {
        title: 'Launch HCD Fellowship',
        names: ['N'],
        startDate: oct,
        endDate: janmar,
        progress: '0%',
        year: 2024
    }, {
        title: 'Launch IHCR Fund',
        names: ['R', 'N'],
        startDate: oct,
        endDate: dec,
        progress: '30%',
        year: 2023
    }, {
        title: 'Regular Program Monitoring + Team Governance',
        names: ['R', 'N'],
        startDate: oct,
        endDate: janmar,
        progress: '45%',
        year: 2024
    }]

    return (
        <svg viewBox="0 0 1500 1500" preserveAspectRatio="none">
            <g>
                <text x="265" y="25"
                    fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" font-weight="700" font-size='14px'>2023</text>

                <text x="50" y="55" id="oct"
                    fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Oct</text>
                <line x1="50" x2="50" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

                <text x="250" y="55"
                    fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Nov</text>
                <line x1="250" x2="250" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

                <text x="450" y="55" id="dec"
                    fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Dec</text>
                <line x1="450" x2="450" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

                <line x1="615" x2="615" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" stroke-width="1"></line>

                <text x="965" y="25"
                    fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" font-weight="700" font-size='14px'>2024</text>

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
            {data.map((value, i) => (
                <g>
                    {value.names?.map((name, i) => (
                        <svg x={oct} y={`10 * ${i + 1}`}>
                            <circle cx='50' cy="50" r="7" fill="rgba(142, 205, 249, 1)" />
                            <text x="82.5" y="94" fill="rgba(80, 80, 80, 1)" fontSize={'10px'} font-weight="600" dx="-11.1953125px">
                                {name}
                            </text>


                        </svg>
                    ))}
                    <text x={oct * 2} y={`100` * `${i + 1}` - 5} fill="rgba(118, 131, 150, 1)" fontSize={'12px'} font-weight="600" dx="-11.1953125px">
                        {value.title}
                    </text>
                    <rect x={value.startDate} y={`100` * `${i + 1}`} width={value.year === 2023 ? value.endDate - value.startDate : value.endDate - value.startDate + 25} height="45" rx="25" ry="25" fill="rgba(253, 212, 212, 1)"></rect>
                    <rect x={value.startDate} y={`100` * `${i + 1}`} width="87.5" height="45" rx="25" ry="25" fill="rgba(243, 87, 87, 1)"></rect>
                    <circle cx={value.startDate * 1.5} cy={`100` * `${i + 1}` + 22} r="7" fill="rgba(195, 72, 72, 1)" />
                    <circle cx={value.startDate * 1.5} cy={`100` * `${i + 1}` + 22} r="3" fill="#FFF" />
                    <svg x={value.year === 2023 ? value.endDate - value.startDate + 60 : value.endDate - value.startDate + 85} y={`100` * `${i + 1}` + 8}>
                        <filter id="shadow">
                            <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
                        </filter>
                        <rect filter="url(#shadow)" x='0' y='0' width="49px" height="28px" rx="14" ry="14" fill="#FFFF"></rect>
                        <text x='23.5' y='18' fill="black" fontSize={'12px'} font-weight="600" dx="-11.1953125px">
                            {value.progress}
                        </text>
                    </svg>
                </g>

            ))}
        </svg >
    );
};

export default Timeline;
