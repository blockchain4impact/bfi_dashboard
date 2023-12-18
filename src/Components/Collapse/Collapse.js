import React, { useState } from 'react'
import "../Collapse/Collapse.css"
import { PlusSquareOutlined, EllipsisOutlined } from "@ant-design/icons"

export default function Collapse(props) {
    const [open, setOpen] = useState(false)
    return (
        <div className='collapse' onClick={() => setOpen(!open)} >
            <div className='collapse-opener'>
                <PlusSquareOutlined />
            </div>
            <div className='collapse-container'>
                <div className='collapse-header'>
                    {props.title} &nbsp;
                    {!open && <EllipsisOutlined style={{ fontWeight: "600" }} />}
                </div>
                {open &&
                    <div className='collapse-expanded'>
                        {props.subheads?.map((subhead, i) => (
                            <p>{subhead}</p>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}
