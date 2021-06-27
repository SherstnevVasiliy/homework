import React from 'react'

function Input(props) {

    return (
        <input
                onChange = {(event) => props.setValue(event.target.value)}
                value = {props.value}
                type = {props.type} 
                className = {props.className} 
                placeholder = {props.placeholder}/>
    );
}

export default Input