import React, { useState, useEffect } from 'react'
import "../Collapse/Collapse.css"
import { PlusSquareOutlined, EllipsisOutlined } from "@ant-design/icons"
import downarrow from "../../Assets/images/downarrow.png";
import { Button, Progress, Select, message } from 'antd';
import axios from 'axios'

export default function Collapse(props) {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState({})
    const [updatedData, setUpdateData] = useState([])
    const [id, setId] = useState("")
    const [messageApi, contextHolder] = message.useMessage();
    const [editable, setEditable] = useState(true);
    const success = (msg) => {
        messageApi.open({
            type: 'success',
            content: msg,
        });
    };
    const error = (msg) => {
        messageApi.open({
            type: 'error',
            content: msg,
        });
    };
    const onEOLStatusChange = (id, value) => {
        setId(id)
        setUpdateData({ ...data, "EOLStatus": value })
    }
    const onInDissChange = (id, value) => {
        setId(id)
        setUpdateData({ ...data, "InDiss": value })
    }
    const onFormalDissChange = (id, value) => {
        setId(id)
        setUpdateData({ ...data, "FormalDiss": value })
    }
    const onMousChange = (id, value) => {
        setId(id)
        setUpdateData({ ...data, "Mous": value })
    }
    const onProjectsShortlistChange = (id, value) => {
        setId(id)
        setUpdateData({ ...data, "MoUr": value })
    }
    const onFundsChange = (id, value) => {
        setId(id)
        setUpdateData({ ...data, "Funds": value })
    }
    const onProjectsStartedChange = (id, value) => {
        setId(id)
        setUpdateData({ ...data, "ProjectsStarted": value })
    }
    const onMoUrChange = (id, value) => {
        setId(id)
        setUpdateData({ ...data, "MoUr": value })
    }
    useEffect(() => {
        setData(props.items);
        if (localStorage.getItem('isLoggedIn')) {
            setEditable(false)
        }
    })
    const handleSubmit = () => {
        if (localStorage.getItem('isLoggedIn')) {
            axios.put(`https://bfi-server.vercel.app/biomeUpdate/${id}`, updatedData, {
                headers: {
                    scheme: 'https',
                }
            })
                .then((res) => { success("success"); })
                .catch((err) => error(err));
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } else {
            error('Please login to edit!')
        }

    }
    return (
        <div className='biome-body' style={{ cursor: 'pointer' }}>
            {contextHolder}
            <div className='biome-data' onClick={() => setOpen(!open)}>
                <div className='biome-task-list' >
                    <div className='biome-task-name'>
                        <p>{data.InstituteName}</p>
                    </div>
                    <div className='biome-badge' >
                        <p style={{ backgroundColor: data.badge === 'Institute' ? 'rgba(245, 213, 122, 1)' : 'rgba(191, 225, 246, 1)' }}>{data.badge}</p>
                    </div>
                </div>

                <div className='biome-list-progress'>
                    <div className='biome-progress'>
                        <Progress percent={100} showInfo={false} />
                    </div>
                    <div className='biome-dropdown'>
                        {!open ? <img src={downarrow} alt='dropdown' /> : <img src={downarrow} alt='dropdown' style={{ transform: 'rotate(180deg)' }} />}
                    </div>
                </div>
            </div>
            {open &&
                <div className='collapse-expanded'>
                    <div className='biome-collapse'>
                        <div className='biome-column'>
                            <div className='biome-dataset'>
                                <p>EoI status</p>
                                <Select
                                    className='ant-input-biome'
                                    onChange={(value) => onEOLStatusChange(data._id, value)}
                                    placeholder={data.EOLStatus}
                                    options={[
                                        {
                                            value: 'Received',
                                            label: 'Received',
                                        },
                                        {
                                            value: 'Not Received',
                                            label: 'Not Received',
                                        }
                                    ]}
                                    disabled={editable}
                                />
                            </div>
                            <div className='biome-dataset'>
                                <p>Initial Discussion</p>
                                {/* <p className='biome-item' style={{
                                    backgroundColor:
                                        data.EOLStatus !== 'Done' ?
                                            'rgba(250, 255, 247, 1)'
                                            :
                                            'rgba(255, 218, 218, 1)',
                                    color:
                                        data.EOLStatus !== 'Done' ?
                                            'rgba(53, 83, 5, 1)'
                                            :
                                            'rgba(95, 4, 4, 1)'
                                }}>{data.InDiss}</p> */}
                                <Select
                                    className='ant-input-biome'
                                    onChange={(value) => onInDissChange(data._id, value)}
                                    placeholder={data.InDiss}
                                    options={[
                                        {
                                            value: 'Done',
                                            label: 'Done',
                                        },
                                        {
                                            value: 'Not Done',
                                            label: 'Not Done',
                                        }
                                    ]}
                                    disabled={editable}
                                />
                            </div>
                            <div className='biome-dataset'>
                                <p>Formal Program Discussion</p>
                                {/* <p className='biome-item' style={{
                                    backgroundColor:
                                        data.EOLStatus !== 'Done' ?
                                            'rgba(250, 255, 247, 1)'
                                            :
                                            'rgba(255, 218, 218, 1)',
                                    color:
                                        data.EOLStatus !== 'Done ' ?
                                            'rgba(53, 83, 5, 1)'
                                            :
                                            'rgba(95, 4, 4, 1)'
                                }}>{data.FormalDiss}</p> */}
                                <Select
                                    className='ant-input-biome'
                                    onChange={(value) => onFormalDissChange(data._id, value)}
                                    placeholder={data.FormalDiss}
                                    options={[
                                        {
                                            value: 'Done',
                                            label: 'Done',
                                        },
                                        {
                                            value: 'Not Done',
                                            label: 'Not Done',
                                        }
                                    ]}
                                    disabled={editable}
                                />
                            </div>
                            <div className='biome-dataset'>
                                <p>MoU shared</p>
                                {/* <p className='biome-item' style={{
                                    backgroundColor:
                                        data.EOLStatus !== 'In discussion' ?
                                            'rgba(250, 255, 247, 1)'
                                            :
                                            'rgba(255, 218, 218, 1)',
                                    color:
                                        data.EOLStatus !== 'In discussion' ?
                                            'rgba(53, 83, 5, 1)'
                                            :
                                            'rgba(95, 4, 4, 1)'
                                }}>{data.MoUr}</p> */}
                                <Select
                                    className='ant-input-biome'
                                    onChange={(value) => onMoUrChange(data._id, value)}
                                    placeholder={data.MoUr}
                                    options={[
                                        {
                                            value: 'Shared',
                                            label: 'Shared',
                                        },
                                        {
                                            value: 'Yet to share',
                                            label: 'Yet to share',
                                        },
                                        {
                                            value: 'In discussion',
                                            label: 'In discussion',
                                        }
                                    ]}
                                    disabled={editable}
                                />
                            </div>
                        </div>
                        <div className='biome-column'>
                            <div className='biome-dataset'>
                                <p>MoU Signed</p>
                                <Select
                                    className='ant-input-biome'
                                    onChange={(value) => onMousChange(data._id, value)}
                                    placeholder={data.Mous}
                                    options={[
                                        {
                                            value: 'Completed',
                                            label: 'Completed',
                                        },
                                        {
                                            value: 'On Going',
                                            label: 'On Going',
                                        },
                                        {
                                            value: 'Yet to start',
                                            label: 'Yet to start',
                                        }
                                    ]}
                                    disabled={editable}
                                />
                            </div>
                            <div className='biome-dataset'>
                                <p>Funds Transferred</p>

                                <Select
                                    className='ant-input-biome'
                                    onChange={(value) => onFundsChange(data._id, value)}
                                    placeholder={data.Funds}
                                    options={[
                                        {
                                            value: 'Completed',
                                            label: 'Completed',
                                        },
                                        {
                                            value: 'On Going',
                                            label: 'On Going',
                                        },
                                        {
                                            value: 'Yet to start',
                                            label: 'Yet to start',
                                        }
                                    ]}
                                    disabled={editable}
                                />
                            </div>
                            <div className='biome-dataset'>
                                <p>Projects/Program Shortlisted</p>
                                <Select
                                    className='ant-input-biome'
                                    onChange={(value) => onProjectsShortlistChange(data._id, value)}
                                    placeholder={data.ProjectsShortlist}
                                    options={[
                                        {
                                            value: 'Completed',
                                            label: 'Completed',
                                        },
                                        {
                                            value: 'On Going',
                                            label: 'On Going',
                                        },
                                        {
                                            value: 'Yet to start',
                                            label: 'Yet to start',
                                        }
                                    ]}
                                    disabled={editable}
                                />
                            </div>
                            <div className='biome-dataset'>
                                <p>Project/Program started</p>
                                <Select
                                    className='ant-input-biome'
                                    onChange={(value) => onProjectsStartedChange(data._id, value)}
                                    placeholder={data.ProjectsStarted}
                                    options={[
                                        {
                                            value: 'Completed',
                                            label: 'Completed',
                                        },
                                        {
                                            value: 'On Going',
                                            label: 'On Going',
                                        },
                                        {
                                            value: 'Yet to start',
                                            label: 'Yet to start',
                                        }
                                    ]}
                                    disabled={editable}
                                />
                            </div>
                        </div>
                    </div>
                    {!editable &&
                        <Button style={{ marginInline: '3vh' }} onClick={handleSubmit}>Update</Button>
                    }
                </div>
            }

        </div>
    )
}
