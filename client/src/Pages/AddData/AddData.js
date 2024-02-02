import React, { useState } from 'react'
import "../AddData/AddData.css"
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, message, DatePicker, Select } from 'antd';
import axios from 'axios';

function AddData() {
    const [messageApi, contextHolder] = message.useMessage();
    const [count, setCount] = useState(1)
    const [data, setData] = useState({})
    const [dashboardItems, setDashboardItems] = useState([])
    const [isOpValid, setIsOpValid] = useState(true)
    const [isValid, setIsValid] = useState(true)
    const { RangePicker } = DatePicker;
    const dateFormat = 'DD-MM-YY';
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
    };
    const error = (err) => {
        messageApi.open({
            type: 'error',
            content: err,
        });
    };
    const handleChange = (e) => {
        if (e.target.name === 'Overall_progress' || e.target.name === 'progress') {
            const percentageRegex = /^[0-9]+(\.[0-9]+)?%$/;
            if (percentageRegex.test(e.target.value)) {
                setData({ ...data, [e.target.name]: e.target.value })
                setIsOpValid(true);
            } else {
                setIsOpValid(false);
            }
        }
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const convertMonth = (dateString) => {
        const [day, month, year] = dateString.split('-');
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ];
        const monthFullName = monthNames[parseInt(month, 10) - 1];
        const formattedDateString = `${day}-${monthFullName}-${year.slice(-2)}`;
        return formattedDateString;
    };
    const onDateChange = (date, dateString) => {
        const convertedstartDate = convertMonth(dateString[0]);
        const convertedendDate = convertMonth(dateString[1])
        setData({ ...data, 'startDate': convertedstartDate, 'endDate': convertedendDate })
    };

    const onTitleChange = (value) => {
        setData({ ...data, 'Title': value })
    };

    const onPriorityChange = (value, index) => {
        setDashboardItems((prevData) => {
            const updatedData = [...prevData];
            updatedData[index] = { ...updatedData[index], 'Priority': value };
            return updatedData;
        });
    }

    const onStatusChange = (value, index) => {
        setDashboardItems((prevData) => {
            const updatedData = [...prevData];
            updatedData[index] = { ...updatedData[index], 'Status': value };
            return updatedData;
        });
    }

    const handleDashItemsChange = (e, index) => {
        if (e.target.name === 'progress') {
            const percentageRegex = /^[0-9]+(\.[0-9]+)?%$/;
            if (percentageRegex.test(e.target.value)) {
                setDashboardItems((prevData) => {
                    const updatedData = [...prevData];
                    updatedData[index] = { ...updatedData[index], [e.target.name]: e.target.value };
                    return updatedData;
                });
                setIsValid(true);
            } else {
                setIsValid(false);
            }
        }
        setDashboardItems((prevData) => {
            const updatedData = [...prevData];
            updatedData[index] = { ...updatedData[index], [e.target.name]: e.target.value };
            return updatedData;
        });
    }
    const handleSubmit = () => {
        const combinedData = {
            ...data,
            dashboardItems: [...dashboardItems],
        };
        isOpValid && isValid && console.log(combinedData)
        // axios.post('http://localhost:8080/post', combinedData).then((res) => success()).catch((err) => error(err))
    }
    return (
        <div className='addData'>
            {contextHolder}
            <div className='addData-head'>
                <h1>Add Data</h1>
                <div className='addData-btn'>
                    <Button type="primary" style={{ backgroundColor: 'rgba(0, 114, 188, 1)', fontFamily: 'DM sans' }} onClick={handleSubmit}>Submit</Button>&nbsp;&nbsp;&nbsp;
                    <Button onClick={() => window.location.pathname = `/`}>Cancel</Button>
                </div>
            </div>

            <div className='addData-body'>
                <div className='form-data'>
                    <div className='addform'>
                        <label htmlFor='Title'>Title</label>
                        <Select
                            className='ant-input'
                            placeholder="Select a Title"
                            onChange={onTitleChange}
                            options={[
                                {
                                    value: 'dfs',
                                    label: 'DFS',
                                },
                                {
                                    value: 'bri',
                                    label: 'BRI',
                                },
                                {
                                    value: 'org',
                                    label: 'ORG',
                                },
                            ]}
                        />
                    </div>
                    <div className='addform'>
                        <label htmlFor='Objective'>Objective</label>
                        <textarea className='input' type={"text"} placeholder={"Enter Objective"} rows="5" cols="33" name={"Objective"} onChange={handleChange} />
                    </div>
                    <div className='addform'>
                        <label htmlFor='Start_Date'>Start Date and End Date</label>
                        <RangePicker className='ant-input' onChange={onDateChange} format={dateFormat} />
                    </div>
                    <div className='addform'>
                        <label htmlFor='Overall_progress'>Overall progress</label>
                        <input className='input' type={"text"} style={{ borderColor: isOpValid ? 'lightgray' : 'red' }} placeholder={"Enter Overall progress"} name={"Overall_progress"} onChange={handleChange} />
                        {!isOpValid && <p style={{ color: 'red', fontSize: '12px' }}>enter a valid percentage (e.g., 25%, 3.5%, etc.)</p>}
                    </div>

                </div>
                <div className='dashboard-form'>
                    <div className='dashboard-form-head'>
                        <p className='add-btn' onClick={() => setCount(count + 1)}>Add<PlusCircleOutlined className="bellicon" /></p>
                    </div>
                    <div className='dashboard-body'>
                        {[...Array(count)].map((e, i) => (
                            <div key={i} className='dashboardItems'>
                                <p>{`Sl.No: 1.${i + 1}`}</p>
                                <div className='addform'>
                                    <label htmlFor='Key_Results'>Key Results</label>
                                    <textarea className='input' type={"text"} placeholder={"Enter Key Results"} rows="5" cols="33" name={"Key_Results"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>

                                <div className='addform'>
                                    <label htmlFor='Initiatives'>Initiatives</label>
                                    <textarea className='input' type={"text"} placeholder={"Enter Initiatives"} rows="5" cols="33" name={"Initiatives"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='DFS'>DFS</label>
                                    <input className='input' type={"text"} placeholder={"Enter DFS"} name={"DFS"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='BFI'>BFI</label>
                                    <input className='input' type={"text"} placeholder={"Enter BFI"} name={"BFI"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='Priority'>Priority</label>
                                    <Select
                                        className='ant-input dbt-ant-input'
                                        placeholder="Select Priority"
                                        onSelect={(value) => onPriorityChange(value, i)}
                                        options={[
                                            {
                                                value: 'High',
                                                label: 'High',
                                            },
                                            {
                                                value: 'Medium',
                                                label: 'Medium',
                                            },
                                            {
                                                value: 'Low',
                                                label: 'Low',
                                            },
                                        ]}
                                    />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='Status'>Status</label>
                                    <Select
                                        className='ant-input dbt-ant-input'
                                        placeholder="Select Status"
                                        onSelect={(value) => onStatusChange(value, i)}
                                        options={[
                                            {
                                                value: 'Ongoing',
                                                label: 'Ongoing',
                                            },
                                            {
                                                value: 'Yet to start',
                                                label: 'Yet to start',
                                            },
                                            {
                                                value: 'Completed',
                                                label: 'Completed',
                                            },
                                        ]}
                                    />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='Timeline'>Timeline</label>
                                    <input className='input' type={"text"} placeholder={"eg. 15-Nov-24"} name={"Timeline"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='progress'>progress</label>
                                    <input className='input' type={"text"} style={{ borderColor: isValid ? 'lightgray' : 'red' }} placeholder={"Enter progress"} name={"progress"} onChange={(e) => handleDashItemsChange(e, i)} />
                                    {!isValid && <p style={{ color: 'red', fontSize: '12px' }}>enter a valid percentage (e.g., 25%, 3.5%, etc.)</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddData