import React from 'react'

const RainbowCode = props => {
  return (
    <div
      className={
        'text-gray-500 rounded-xl shadow-sm bg-gray-50 my-5 p-6 md:p-10'
      }
    >
      <ul>
        <li>background: {props.darkestColor};</li>
        <li>background: -moz-{props.gradient};</li>
        <li>background: -webkit-{props.gradient};</li>
        <li>background: {props.gradient};</li>
      </ul>
    </div>
  )
}

export default RainbowCode
