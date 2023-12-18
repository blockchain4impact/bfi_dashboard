import React from 'react'
import "../TaskCards/TaskCards.css"
import { MoreOutlined, UserOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons"

export default function TaskCards() {
    return (
        <div className='task-cards'>
            <div className='task-cards-header'>
                <h3 style={{ margin: 0 }}>Main Task</h3>
                <MoreOutlined />
            </div>

            <div className='task-cards-body'>
                <div className='task-card-data'>
                    <UserOutlined />
                    <span>Magna aliqua enim</span>
                </div>
                <div className='task-card-data'>
                    <UserOutlined />
                    <span>Magna aliqua enim</span>
                </div>
            </div>

            <div className='task-cards-footer'>
                <div>
                    <MessageOutlined />&nbsp;
                    <span>3</span> 
                </div>
                <StarOutlined />
            </div>
        </div>
    )
}
