// CalendarTimeline.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ProgressBar from 'react-progressbar';
import 'react-calendar/dist/Calendar.css';
import './Timeline.css'; // Create this CSS file for styling

const Timeline = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const employees = [
        { name: 'Employee 1', start: 2, end: 4 },
        { name: 'Employee 2', start: 5, end: 8 },
        // Add more employees as needed
    ];

    return (
        <div>
            <div className="timeline">
                {months.map((month, index) => (
                    <div key={index} className="month">
                        {month}
                    </div>
                ))}
            </div>
            {employees.map((employee, index) => (
                <div key={index} className="employee">
                    <div className="name">{employee.name}</div>
                    <div className="duration">
                        {months.map((month, index) => (
                            <div key={index} className={`month ${index >= employee.start && index <= employee.end ? 'active' : ''}`} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
