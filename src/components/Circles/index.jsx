import React from 'react'

const Circles = props => {
  return (
    <section className="Circles">
      {props.links.map(link => (
        <div
          key={link.id}
          name={link.id}
          onClick={() => props.handleClick(link.id)}
          className={link.id === props.selected ? ' selected' : ''}
        >
          {' '}
          {link.id}{' '}
        </div>
      ))}
    </section>
  )
}

export default Circles
