import React, { useState } from 'react'
import "../AddData/AddData.css"
import { PlusCircleOutlined } from '@ant-design/icons';
import CustomInput from '../../Components/Input/CustomInput';
import { Button } from 'antd';
import axios from 'axios';

function AddData() {
    const [count, setCount] = useState(1)
    const [data, setData] = useState({})
    const [dashboardItems, setDashboardItems] = useState([])
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleDashItemsChange = (e, index) => {
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

        axios.post('http://localhost:8080/post', combinedData).then((res)=>console.log('success')).catch((err)=>console.log(err))
    }
    return (
        <div className='addData'>
            <h1>Add Data</h1>
            <div className='addData-body'>
                <div>
                    {/* <div className='addform'>
                        <label htmlFor='select'>Select</label> &nbsp;
                        <select name="select" id="select" onChange={handleChange}>
                            <option value="null" >Select an option</option>
                            <option value="dfs" >DFS</option>
                            <option value="bri">BRI</option>
                            <option value="org">ORG</option>
                        </select>
                    </div> */}
                    <div className='addform'>
                        <label htmlFor='Title'>Title</label> &nbsp;
                        <input className='input' type={"text"} placeholder={"BRI | DFS | ORG"} name={"Title"} onChange={handleChange} />
                    </div>
                    <div className='addform'>
                        <label htmlFor='Objective'>Objective</label> &nbsp;
                        <textarea className='input' type={"text"} placeholder={"Enter Objective"} rows="5" cols="33" name={"Objective"} onChange={handleChange} />
                    </div>
                    <div className='addform'>
                        <label htmlFor='Start_Date'>Start Date</label> &nbsp;
                        <input className='input' type={"text"} placeholder={"eg. 05-Nov-23"} name={"Start_Date"} onChange={handleChange} />
                    </div>
                    <div className='addform'>
                        <label htmlFor='End_Date'>End Date</label> &nbsp;
                        <input className='input' type={"text"} placeholder={"eg. 05-Dec-23"} name={"End_Date"} onChange={handleChange} />
                    </div>
                    <div className='addform'>
                        <label htmlFor='Overall_progress'>Overall progress</label> &nbsp;
                        <input className='input' type={"text"} placeholder={"Enter Overall progress"} name={"Overall_progress"} onChange={handleChange} />
                    </div>
                </div>
                <div className='dashboard-form'>
                    {[...Array(count)].map((e, i) => (
                        <div key={i} className='dashboardItems'>
                            <p>{`1.${i + 1}`}</p>
                            <div className='addform'>
                                <label htmlFor='Key_Results'>Key Results</label> &nbsp;
                                <textarea className='input' type={"text"} placeholder={"Enter Key Results"} rows="5" cols="33" name={"Key_Results"} onChange={(e) => handleDashItemsChange(e, i)} />
                            </div>

                            <div className='addform'>
                                <label htmlFor='Initiatives'>Initiatives</label> &nbsp;
                                <textarea className='input' type={"text"} placeholder={"Enter Initiatives"} rows="5" cols="33" name={"Initiatives"} onChange={(e) => handleDashItemsChange(e, i)} />
                            </div>
                            <div className='addform'>
                                <label htmlFor='DFS'>DFS</label> &nbsp;
                                <input className='input' type={"text"} placeholder={"Enter DFS"} name={"DFS"} onChange={(e) => handleDashItemsChange(e, i)} />
                            </div>
                            <div className='addform'>
                                <label htmlFor='BFI'>BFI</label> &nbsp;
                                <input className='input' type={"text"} placeholder={"Enter BFI"} name={"BFI"} onChange={(e) => handleDashItemsChange(e, i)} />
                            </div>
                            <div className='addform'>
                                <label htmlFor='Priority'>Priority</label> &nbsp;
                                <input className='input' type={"text"} placeholder={"Enter Priority"} name={"Priority"} onChange={(e) => handleDashItemsChange(e, i)} />
                            </div>
                            <div className='addform'>
                                <label htmlFor='Status'>Status</label> &nbsp;
                                <input className='input' type={"text"} placeholder={"Enter Status"} name={"Status"} onChange={(e) => handleDashItemsChange(e, i)} />
                            </div>
                            <div className='addform'>
                                <label htmlFor='progress'>progress</label> &nbsp;
                                <input className='input' type={"text"} placeholder={"Enter progress"} name={"progress"} onChange={(e) => handleDashItemsChange(e, i)} />
                            </div>
                        </div>
                    ))}
                    <PlusCircleOutlined className="bellicon" onClick={() => setCount(count + 1)} />
                </div>
            </div>
            <Button type="primary" onClick={handleSubmit}>Submit</Button>&nbsp;&nbsp;&nbsp;
            <Button >Clear</Button>
        </div>
    )
}

export default AddData