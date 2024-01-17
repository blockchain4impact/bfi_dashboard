import React, { useState } from 'react'
import "../Collapse/Collapse.css"
import { PlusSquareOutlined, EllipsisOutlined } from "@ant-design/icons"
import downarrow from "../../Assets/images/downarrow.png";
import { Progress } from 'antd';

export default function Collapse(props) {
    const [open, setOpen] = useState(false)
        return (
            <div className='biome-body' onClick={() => setOpen(!open)}>
                <div className='biome-data'>
                    <div className='biome-task-list' >
                        <div className='biome-task-name'>
                            <p>{props.items.InstituteName}</p>
                        </div>
                        <div className='biome-badge' >
                            <p style={{ backgroundColor: props.items.badge === 'Institute' ? 'rgba(245, 213, 122, 1)' : 'rgba(191, 225, 246, 1)' }}>{props.items.badge}</p>
                        </div>
                    </div>

                    <div className='biome-list-progress'>
                        <div className='biome-progress'>
                            <Progress percent={100} showInfo={false} />
                        </div>
                        <div className='biome-dropdown'>
                        {!open? <img src={downarrow} alt='dropdown' /> : <img src={downarrow} alt='dropdown' style={{transform: 'rotate(180deg)'}}/>}
                        </div>
                    </div>
                </div>
                {open &&
                    <div className='collapse-expanded'>
                        <div className='biome-collapse'>
                            <div className='biome-column'>
                                <div className='biome-dataset'>
                                    <p>EoI status</p>
                                    <p className='biome-item' style={{
                                        backgroundColor:
                                            props.items.EOLStatus === 'Received' ?
                                                'rgba(250, 255, 247, 1)'
                                                :
                                                'rgba(255, 218, 218, 1)',
                                        color: 
                                            props.items.EOLStatus === 'Received' ?
                                                'rgba(53, 83, 5, 1)'
                                                :
                                                'rgba(95, 4, 4, 1)'
                                    }}>{props.items.EOLStatus}</p>
                                </div>
                                <div className='biome-dataset'>
                                    <p>Initial Discussion</p>
                                    <p className='biome-item' style={{
                                        backgroundColor:
                                            props.items.EOLStatus !== 'Done' ?
                                                'rgba(250, 255, 247, 1)'
                                                :
                                                'rgba(255, 218, 218, 1)',
                                        color: 
                                            props.items.EOLStatus !== 'Done' ?
                                                'rgba(53, 83, 5, 1)'
                                                :
                                                'rgba(95, 4, 4, 1)'
                                    }}>{props.items.InDiss}</p>
                                </div>
                                <div className='biome-dataset'>
                                    <p>Formal Program Discussion</p>
                                    <p className='biome-item' style={{
                                        backgroundColor:
                                            props.items.EOLStatus !== 'Done' ?
                                                'rgba(250, 255, 247, 1)'
                                                :
                                                'rgba(255, 218, 218, 1)',
                                        color: 
                                            props.items.EOLStatus !== 'Done ' ?
                                                'rgba(53, 83, 5, 1)'
                                                :
                                                'rgba(95, 4, 4, 1)'
                                    }}>{props.items.FormalDiss}</p>
                                </div>
                                <div className='biome-dataset'>
                                    <p>MoU shared</p>
                                    <p className='biome-item' style={{
                                        backgroundColor:
                                            props.items.EOLStatus !== 'In discussion' ?
                                                'rgba(250, 255, 247, 1)'
                                                :
                                                'rgba(255, 218, 218, 1)',
                                        color: 
                                            props.items.EOLStatus !== 'In discussion' ?
                                                'rgba(53, 83, 5, 1)'
                                                :
                                                'rgba(95, 4, 4, 1)'
                                    }}>{props.items.MoUr}</p>
                                </div>
                            </div>
                            <div className='biome-column'>
                                <div className='biome-dataset'>
                                    <p>MoU Signed</p>
                                    <p className='biome-item' style={{
                                        backgroundColor:
                                            props.items.EOLStatus === 'Completed' ?
                                                'rgba(250, 255, 247, 1)'
                                                :
                                                'rgba(255, 218, 218, 1)',
                                        color: 
                                            props.items.EOLStatus === 'Completed' ?
                                                'rgba(53, 83, 5, 1)'
                                                :
                                                'rgba(95, 4, 4, 1)'
                                    }}>{props.items.Mous}</p>
                                </div>
                                <div className='biome-dataset'>
                                    <p>Funds Transferred</p>
                                    <p className='biome-item' style={{
                                        backgroundColor:
                                            props.items.EOLStatus === 'On Going' ?
                                                'rgba(253, 241, 199, 1)'
                                                :
                                                'rgba(255, 218, 218, 1)',
                                        color: 
                                            props.items.EOLStatus === 'On Going' ?
                                                'rgba(114, 63, 2, 1)'
                                                :
                                                'rgba(95, 4, 4, 1)'
                                    }}>{props.items.Funds}</p>
                                </div>
                                <div className='biome-dataset'>
                                    <p>Projects/Program Shortlisted</p>
                                    <p className='biome-item' style={{
                                        backgroundColor:
                                            props.items.EOLStatus === 'Yet to Start' ?
                                                'rgba(250, 255, 247, 1)'
                                                :
                                                'rgba(255, 218, 218, 1)',
                                        color: 
                                            props.items.EOLStatus === 'Yet to Start' ?
                                                'rgba(53, 83, 5, 1)'
                                                :
                                                'rgba(95, 4, 4, 1)'
                                    }}>{props.items.ProjectsShortlist}</p>
                                </div>
                                <div className='biome-dataset'>
                                    <p>Project/Program started</p>
                                    <p className='biome-item' style={{
                                        backgroundColor:
                                            props.items.EOLStatus === 'Yet to Start' ?
                                                'rgba(250, 255, 247, 1)'
                                                :
                                                'rgba(255, 218, 218, 1)',
                                        color: 
                                            props.items.EOLStatus === 'Yet to Start' ?
                                                'rgba(53, 83, 5, 1)'
                                                :
                                                'rgba(95, 4, 4, 1)'
                                    }}>{props.items.ProjectsStarted}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
}
