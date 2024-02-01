import React, {useState} from 'react'
import "../Input/Input.css"

function CustomInput(props) {

  return (
    <div className='addform'>
        <label className='label' htmlFor={props.name}>{props.name}</label> &nbsp;
        <input className='input' type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.handleChange}/>
    </div>
  )
}

export default CustomInput