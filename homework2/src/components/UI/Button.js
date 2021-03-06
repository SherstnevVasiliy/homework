import React from 'react'

function Button(props) {

    return (
        <button className={props.className} onClick={props.onSubmit}>{props.title}</button>
    )
}

export default Button