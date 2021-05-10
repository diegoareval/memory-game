import React from 'react'
import "./button.css"
const Button = ({action, title}) => {
    return (
        <button className="my-btn" onClick={() => action()}>
          {title}
        </button>
    )
}

export default Button
