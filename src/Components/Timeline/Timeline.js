import React from 'react';

const Timeline = () => {
    const years = [];
    const startYear = 2022
    const endYear = 2023
    for (let i = 2022; i <= 2023; i++) {
        years.push(i);
    }
    const tasks = [
        {
            name: 'Launch BPI-BIOME Network and discussion with Institutes and Incubators',
            start: 2023,
            end: 2024,
            progress: 100,
            color: 'green'
        },
        {
            name: 'Signing MoU with Institutes and Incubators for BPI-BIOME',
            start: 2024,
            end: 2025,
            progress: 87,
            color: 'yellow'
        },
        {
            name: 'Finalising projects/programs and commencement of the projects/program',
            start: 2025,
            end: 2026,
            progress: 0,
            color: 'red'
        },
        // Add more tasks as needed
    ];


    const progressStart = ((5 - 2023) / (2023 - 2022)) * 100;
    const progressEnd = ((25 - 2022) / (2023 - 2022)) * 100;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (
        <svg style={{ width: '100%', height: `${50 + tasks.length * 30}px` }}>
            {months.map((month, index) => (
                <text key={month} x={`${(index / 12) * 100}%`} y="15" textAnchor="middle" style={{ fontSize: '10px' }}>{month}</text>
            ))}
            <line x1="10" y1="50" x2="90%" y2="50" stroke="#000" strokeWidth="2" />
            {years.map((year, index) => (
                <g key={year} transform={`translate(${10 + index * 80 / (years.length - 1)}%, 0)`}>
                    <line x1="0" y1="45" x2="0" y2="55" stroke="#000" strokeWidth="2" />
                    <text x="0" y="40" textAnchor="middle" style={{ fontSize: '12px' }}>{year}</text>
                </g>
            ))}
            {tasks.map((task, index) => (
                <g key={task.name} transform={`translate(${10 + ((task.start - startYear) / (endYear - startYear)) * 80}%, ${70 + index * 30})`}>
                    <text x="0" y="-5" style={{ fontSize: '12px' }}>{task.name} ({task.progress}%)</text>
                    <rect x="0" y="0" width={`${((task.end - task.start) / (endYear - startYear)) * 80}%`} height="10" fill={task.color} />
                </g>
            ))}
        </svg>
    );
};

export default Timeline;
