import React from 'react'

const CircleSelector = props => {
  return (
    <div className="CircleSelector">
      {props.links.map(link => (
        <button
          key={link.id}
          name={link.id}
          onClick={() => props.handleClick(link.id)}
          className={link.id === props.selected ? ' selected' : ''}
        >
          Select Circle {link.id}{' '}
        </button>
      ))}
    </div>
  )
}

export default CircleSelector
