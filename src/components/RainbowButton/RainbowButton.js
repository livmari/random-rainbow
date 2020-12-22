import React from 'react'

const RainbowButton = props => {
  return (
    <button
      onClick={props.handleClick}
      id={props.id}
      className={'focus:outline-none font-medium mt-4 py-5 px-4 text-lg'}
    >
      Hit space, or click me, to create a new rainbow
    </button>
  )
}

export default RainbowButton
