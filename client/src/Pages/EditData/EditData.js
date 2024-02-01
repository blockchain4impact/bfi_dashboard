import React, { useState, useEffect } from 'react'
import "../AddData/AddData.css"
import { PlusCircleOutlined } from '@ant-design/icons';
import CustomInput from '../../Components/Input/CustomInput';
import { Button } from 'antd';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function EditData() {
    const id = useLocation()
    const [data, setData] = useState({})
    const [count, setCount] = useState(1)
    const [dataset, setDataSet] = useState({
        Overallprogress: '',
        endDate: '',
        objective: '',
        startDate: '',
        title: '',
        dashboardItems: [{
            BFI: '',
            DFS: '',
            Initiatives: '',
            Key_Results: '',
            Priority: '',
            Status: '',
            progress: ''
        }]
    })
    const [dashboardItems, setDashboardItems] = useState([])
    const handleChange = (e) => {
        setDataSet({ ...dataset, [e.target.name]: e.target.value })
    }
    const handleDashItemsChange = (e, index) => {
        setDashboardItems((prevData) => {
            const updatedData = [...prevData];
            updatedData[index] = { ...updatedData[index], [e.target.name]: e.target.value };
            return updatedData;
        });
    }
    // const handleSubmit = () => {
    //     const combinedData = {
    //         [data.Overallprogress]: data.Overallprogress,
    //         [data.objective]: data.objective,
    //         [data.title]: data.title,
    //         [data.startDate]: data.startDate,
    //         [data.endDate]: data.endDate,
    //         [data.dashboardItems.BFI]: data.dashboardItems.BFI,
    //         [data.dashboardItems.DFS]: data.dashboardItems.BFI,
    //         [data.dashboardItems.Initiatives]: data.dashboardItems.Initiatives,
    //         [data.dashboardItems.Key_Results]: data.dashboardItems.Key_Results,
    //         [data.dashboardItems.Priority]: data.dashboardItems.Priority,
    //         [data.dashboardItems.Status]: data.dashboardItems.Status,
    //         [data.dashboardItems.progress]: data.dashboardItems.progress,
    //     };

    //     axios.put(`http://localhost:8080/updatepost/${id.state}`, combinedData).then((res) => console.log('success')).catch((err) => console.log(err))
    // }
    const fetchData = async () => {
        await axios.get(`http://localhost:8080/getpost/${id.state}`).then((res) =>
            setData(res.data)
        )
    }
    useEffect(() => {
        fetchData()
    }, []);
    console.log(data)
    return (
        <>
            <div className='addData'>
                <h1>Edit Data</h1>
                <div className='addData-body'>
                    <div>
                        <div className='addform'>
                        </div>
                        <div className='addform'>
                            <label htmlFor='Title'>Title</label> &nbsp;
                            <input className='input' type={"text"} placeholder={data.title} name={"Title"} onChange={handleChange} />
                        </div>
                        <div className='addform'>
                            <label htmlFor='Objective'>Objective</label> &nbsp;
                            <textarea className='input' type={"text"} placeholder={data.objective} rows="5" cols="33" name={"Objective"} onChange={handleChange} />
                        </div>
                        <div className='addform'>
                            <label htmlFor='Start_Date'>Start Date</label> &nbsp;
                            <input className='input' type={"text"} placeholder={data.startDate} name={"Start_Date"} onChange={handleChange} />
                        </div>
                        <div className='addform'>
                            <label htmlFor='End_Date'>End Date</label> &nbsp;
                            <input className='input' type={"text"} placeholder={data.endDate} name={"End_Date"} onChange={handleChange} />
                        </div>
                        <div className='addform'>
                            <label htmlFor='Overall_progress'>Overall progress</label> &nbsp;
                            <input className='input' type={"text"} placeholder={data.Overallprogress} name={"Overall_progress"} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='dashboard-form'>
                        {data.dashboardItems?.map((value, i) => (
                            <div key={i} className='dashboardItems'>
                                <p>{`1.${i + 1}`}</p>
                                <div className='addform'>
                                    <label htmlFor='Key_Results'>Key Results</label> &nbsp;
                                    <textarea className='input' type={"text"} value={value.Key_Results} rows="5" cols="33" placeholder={"Enter Key Results"} name={"Key_Results"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>

                                <div className='addform'>
                                    <label htmlFor='Initiatives'>Initiatives</label> &nbsp;
                                    <textarea className='input' type={"text"} value={value.Initiatives} rows="5" cols="33" placeholder={"Enter Initiatives"} name={"Initiatives"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='DFS'>DFS</label> &nbsp;
                                    <input className='input' type={"text"} value={value.DFS} placeholder={"Enter DFS"} name={"DFS"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='BFI'>BFI</label> &nbsp;
                                    <input className='input' type={"text"} value={value.BFI} placeholder={"Enter BFI"} name={"BFI"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='Priority'>Priority</label> &nbsp;
                                    <input className='input' type={"text"} value={value.Priority} placeholder={"Enter Priority"} name={"Priority"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='Status'>Status</label> &nbsp;
                                    <input className='input' type={"text"} value={value.Status} placeholder={"Enter Status"} name={"Status"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>
                                <div className='addform'>
                                    <label htmlFor='progress'>progress</label> &nbsp;
                                    <input className='input' type={"text"} value={value.progress} placeholder={"Enter progress"} name={"progress"} onChange={(e) => handleDashItemsChange(e, i)} />
                                </div>
                            </div>
                        ))}
                        <PlusCircleOutlined className="bellicon" onClick={() => setCount(count + 1)} />
                    </div>
                </div>
                <Button type="primary" 
                // onClick={handleSubmit}
                >Submit</Button>&nbsp;&nbsp;&nbsp;
                <Button onClick={() => window.location.pathname = `/${data.title}`}>Cancel</Button>
            </div>

        </>
    )
}

export default EditData