import React from 'react'

const Button = ({onClick,color,text}) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'
        >
        {text}
      </button>
    )
}

export default Button
