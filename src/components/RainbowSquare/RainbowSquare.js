import React from 'react'

import './RainbowSquare.css'

const RainbowSquare = props => {
  return (
    <div
      onClick={props.handleClick}
      id={props.id}
      className={'rainbow-square h-3/6 rounded-xl shadow-sm'}
    />
  )
}

export default RainbowSquare
